import confetti from 'canvas-confetti'

function getThemeColors(): string[] {
  if (typeof document === 'undefined') return ['#c8a050', '#8b6914', '#a08030']
  const dark = document.documentElement.classList.contains('dark')
  return dark
    ? ['#d4b87a', '#c9a85c', '#b8943e', '#a07828', '#e8cc94']
    : ['#c8a050', '#8b6914', '#a08030', '#6b4c0a', '#e0c070']
}

export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: getThemeColors(),
  })
}

export function fireConfettiCannon() {
  const end = Date.now() + 500
  const colors = getThemeColors()

  ;(function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    })
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

export function fireStars() {
  confetti({
    particleCount: 40,
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: ['star'],
    colors: getThemeColors(),
  })
}
