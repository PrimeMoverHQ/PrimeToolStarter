export const consoleCaptureScript = `
(function() {
  if (window.self === window.top) return;

  ['log', 'warn', 'error', 'info'].forEach(function(level) {
    var original = console[level];
    console[level] = function() {
      original.apply(console, arguments);
      try {
        var args = Array.from(arguments);
        var message = args.map(function(a) {
          if (a === null) return 'null';
          if (a === undefined) return 'undefined';
          if (a instanceof Error) return a.message + (a.stack ? '\\n' + a.stack : '');
          if (typeof a === 'object') {
            try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
          }
          return String(a);
        }).join(' ');

        window.parent.postMessage({
          type: 'console',
          level: level,
          message: message,
          timestamp: Date.now()
        }, '*');
      } catch(e) {}
    };
  });

  window.addEventListener('error', function(e) {
    window.parent.postMessage({
      type: 'console',
      level: 'error',
      message: e.message + (e.filename ? ' at ' + e.filename + ':' + e.lineno : ''),
      timestamp: Date.now()
    }, '*');
  });

  window.addEventListener('unhandledrejection', function(e) {
    window.parent.postMessage({
      type: 'console',
      level: 'error',
      message: 'Unhandled Promise Rejection: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)),
      timestamp: Date.now()
    }, '*');
  });
})();
`
