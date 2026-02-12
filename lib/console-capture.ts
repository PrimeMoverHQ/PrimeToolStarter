export const consoleCaptureScript = `
(function() {
  if (window.self === window.top) return;

  function send(level, message) {
    try {
      window.parent.postMessage({
        type: 'console',
        level: level,
        message: message,
        timestamp: Date.now()
      }, '*');
    } catch(e) {}
  }

  function serialize(a) {
    if (a === null) return 'null';
    if (a === undefined) return 'undefined';
    if (a instanceof Error) {
      var msg = a.name + ': ' + a.message;
      if (a.stack) {
        var lines = a.stack.split('\\n').slice(0, 10).join('\\n');
        msg += '\\n' + lines;
      }
      return msg;
    }
    if (typeof a === 'object') {
      try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
    }
    return String(a);
  }

  ['log', 'warn', 'error', 'info'].forEach(function(level) {
    var original = console[level];
    console[level] = function() {
      original.apply(console, arguments);
      var message = Array.from(arguments).map(serialize).join(' ');
      send(level, message);
    };
  });

  window.addEventListener('error', function(e) {
    var message = e.message || 'Unknown error';
    if (e.filename) message += ' at ' + e.filename + ':' + e.lineno + ':' + e.colno;
    if (e.error && e.error.stack) {
      var lines = e.error.stack.split('\\n').slice(0, 10).join('\\n');
      message += '\\n' + lines;
    }
    send('error', message);
  });

  window.addEventListener('error', function(e) {
    var target = e.target || e.srcElement;
    if (target && target !== window && target.tagName) {
      var tag = target.tagName.toLowerCase();
      var src = target.src || target.href || '';
      send('error', 'Failed to load ' + tag + ': ' + src);
    }
  }, true);

  window.addEventListener('unhandledrejection', function(e) {
    var reason = e.reason;
    var message = 'Unhandled Promise Rejection: ';
    if (reason instanceof Error) {
      message += reason.name + ': ' + reason.message;
      if (reason.stack) {
        var lines = reason.stack.split('\\n').slice(0, 10).join('\\n');
        message += '\\n' + lines;
      }
    } else {
      message += serialize(reason);
    }
    send('error', message);
  });

  var originalFetch = window.fetch;
  window.fetch = function() {
    var url = arguments[0];
    if (typeof url === 'object' && url.url) url = url.url;
    return originalFetch.apply(this, arguments).then(function(response) {
      if (!response.ok) {
        send('error', 'Fetch error ' + response.status + ' ' + response.statusText + ': ' + url);
      }
      return response;
    }).catch(function(err) {
      send('error', 'Fetch failed: ' + url + ' - ' + (err.message || String(err)));
      throw err;
    });
  };

  var originalXHROpen = XMLHttpRequest.prototype.open;
  var originalXHRSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url) {
    this._captureUrl = method + ' ' + url;
    return originalXHROpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function() {
    var xhr = this;
    var url = xhr._captureUrl || 'unknown';
    xhr.addEventListener('error', function() {
      send('error', 'XHR failed: ' + url);
    });
    xhr.addEventListener('load', function() {
      if (xhr.status >= 400) {
        send('error', 'XHR error ' + xhr.status + ': ' + url);
      }
    });
    return originalXHRSend.apply(this, arguments);
  };
})();
`
