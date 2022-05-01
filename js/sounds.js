export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const forestSound = new Audio('../sounds/forest.wav')

  const rainSound = new Audio(
    'https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view'
  )

  const coffeeShopSound = new Audio(
    'https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view'
  )

  const fireplaceSound = new Audio(
    'https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view'
  )

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  fireplaceSound.loop = true

  return {
    buttonPressAudio,
    kitchenTimer,
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound
  }
}
