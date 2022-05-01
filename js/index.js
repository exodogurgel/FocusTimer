import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffee-shop')
const buttonFireplace = document.querySelector('.fireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const soundsBg = ['forest', 'rain', 'coffee-shop', 'fireplace']

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls
})

buttonPlay.addEventListener('click', () => {
  timer.countdown()
  controls.play()
  Sounds().buttonPressAudio.play()
})

buttonPause.addEventListener('click', () => {
  timer.hold()
  controls.reset()
  Sounds().buttonPressAudio.play()
})

buttonStop.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  Sounds().buttonPressAudio.play()
})

buttonPlus.addEventListener('click', () => {
  timer.plus()
  Sounds().buttonPressAudio.play()
})

buttonMinus.addEventListener('click', () => {
  timer.minus()
  Sounds().buttonPressAudio.play()
})

buttonForest.addEventListener('click', () => {
  controls.removeButtonPress(
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
  )
  controls.removeColorButtonPress(
    soundsBg[0],
    soundsBg[1],
    soundsBg[2],
    soundsBg[3]
  )
  Sounds().forestSound.play()
})

buttonRain.addEventListener('click', () => {
  controls.removeButtonPress(
    buttonRain,
    buttonForest,
    buttonCoffeeShop,
    buttonFireplace
  )
  controls.removeColorButtonPress(
    soundsBg[1],
    soundsBg[0],
    soundsBg[2],
    soundsBg[3]
  )
})

buttonCoffeeShop.addEventListener('click', () => {
  controls.removeButtonPress(
    buttonCoffeeShop,
    buttonRain,
    buttonForest,
    buttonFireplace
  )
  controls.removeColorButtonPress(
    soundsBg[2],
    soundsBg[1],
    soundsBg[0],
    soundsBg[3]
  )
})

buttonFireplace.addEventListener('click', () => {
  controls.removeButtonPress(
    buttonFireplace,
    buttonCoffeeShop,
    buttonRain,
    buttonForest
  )
  controls.removeColorButtonPress(
    soundsBg[3],
    soundsBg[2],
    soundsBg[1],
    soundsBg[0]
  )
})
