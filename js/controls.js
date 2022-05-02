import {
  buttonPlay,
  buttonPause,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace
} from './elements.js'

const soundsBg = ['forest', 'rain', 'coffee-shop', 'fireplace']

export default function Controls() {
  function removeButtonPress() {
    buttonForest.classList.remove('press')
    buttonRain.classList.remove('press')
    buttonCoffeeShop.classList.remove('press')
    buttonFireplace.classList.remove('press')
  }

  function removeColorButtonPress() {
    document.querySelector(`.${soundsBg[0]} .change`).classList.remove('add')
    document.querySelector(`.${soundsBg[1]} .change`).classList.remove('add')
    document.querySelector(`.${soundsBg[2]} .change`).classList.remove('add')
    document.querySelector(`.${soundsBg[3]} .change`).classList.remove('add')
  }

  /*---------------------- Forest ------------------------*/

  function ButtonPressForest() {
    buttonForest.classList.add('press')
  }

  function colorButtonPressForest() {
    document.querySelector(`.forest .change`).classList.add('add')
  }

  /*---------------------- Rain ------------------------*/

  function ButtonPressRain() {
    buttonRain.classList.add('press')
  }

  function colorButtonPressRain() {
    document.querySelector(`.rain .change`).classList.add('add')
  }

  /*---------------------- Coffee-shop ------------------------*/

  function ButtonPressCoffeeShop() {
    buttonCoffeeShop.classList.add('press')
  }

  function colorButtonPressCoffeeShop() {
    document.querySelector(`.coffee-shop .change`).classList.add('add')
  }

  /*---------------------- Fireplace ------------------------*/

  function ButtonPressFireplace() {
    buttonFireplace.classList.add('press')
  }

  function colorButtonPressFireplace() {
    document.querySelector(`.fireplace .change`).classList.add('add')
  }

  /*-----------------------------------------------------------*/

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return {
    removeButtonPress,
    removeColorButtonPress,
    play,
    reset,
    ButtonPressForest,
    colorButtonPressForest,
    ButtonPressRain,
    colorButtonPressRain,
    ButtonPressCoffeeShop,
    colorButtonPressCoffeeShop,
    ButtonPressFireplace,
    colorButtonPressFireplace
  }
}
