import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from './elements.js'

export default function ({ controls, timer, sounds }) {
  /* Eventos de clicks */

  buttonPlay.addEventListener('click', () => {
    timer.countdown()
    controls.play()
    sounds.buttonPressAudio.play()
  })

  buttonPause.addEventListener('click', () => {
    timer.hold()
    controls.reset()
    sounds.buttonPressAudio.play()
  })

  buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.reset()
    sounds.buttonPressAudio.play()
  })

  buttonPlus.addEventListener('click', () => {
    timer.plus()
    sounds.buttonPressAudio.play()
  })

  buttonMinus.addEventListener('click', () => {
    timer.minus()
    sounds.buttonPressAudio.play()
  })

  /* Eventos de sounds */

  buttonForest.addEventListener('click', () => {
    sounds.playForest()
  })

  buttonRain.addEventListener('click', () => {
    sounds.playRain()
  })

  buttonCoffeeShop.addEventListener('click', () => {
    sounds.playCoffeShop()
  })

  buttonFireplace.addEventListener('click', () => {
    sounds.playFireplace()
  })
}
