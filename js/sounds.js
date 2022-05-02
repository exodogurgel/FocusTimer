import Controls from './controls.js'
const controls = Controls()
export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )

  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const forestSound = new Audio(
    'https://github.com/exodogurgel/FocusTimer/blob/main/sounds/forest.wav?raw=true'
  )

  const rainSound = new Audio(
    'https://github.com/exodogurgel/FocusTimer/blob/main/sounds/rain.wav?raw=true'
  )

  const coffeeShopSound = new Audio(
    'https://github.com/exodogurgel/FocusTimer/blob/main/sounds/coffee-shop.wav?raw=true'
  )

  const fireplaceSound = new Audio(
    'https://github.com/exodogurgel/FocusTimer/blob/main/sounds/fireplace.wav?raw=true'
  )

  forestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  fireplaceSound.loop = true

  let isPlaying = 0

  function soundPause() {
    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.pause()
    fireplaceSound.pause()
  }

  function playForest() {
    if (isPlaying == 0) {
      isPlaying = 1
      forestSound.play()
      controls.colorButtonPressForest()
      controls.ButtonPressForest()
    } else {
      isPlaying = 0
      controls.removeButtonPress()
      controls.removeColorButtonPress()
      soundPause()
    }
  }

  function playRain() {
    if (isPlaying == 0) {
      isPlaying = 1
      rainSound.play()
      controls.colorButtonPressRain()
      controls.ButtonPressRain()
    } else {
      isPlaying = 0
      controls.removeButtonPress()
      controls.removeColorButtonPress()
      soundPause()
    }
  }

  function playCoffeShop() {
    if (isPlaying == 0) {
      isPlaying = 1
      coffeeShopSound.play()
      controls.colorButtonPressCoffeeShop()
      controls.ButtonPressCoffeeShop()
    } else {
      isPlaying = 0
      controls.removeButtonPress()
      controls.removeColorButtonPress()
      soundPause()
    }
  }

  function playFireplace() {
    if (isPlaying == 0) {
      isPlaying = 1
      fireplaceSound.play()
      controls.colorButtonPressFireplace()
      controls.ButtonPressFireplace()
    } else {
      isPlaying = 0
      controls.removeButtonPress()
      controls.removeColorButtonPress()
      soundPause()
    }
  }

  return {
    buttonPressAudio,
    kitchenTimer,
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
    playForest,
    playRain,
    playCoffeShop,
    playFireplace
  }
}
