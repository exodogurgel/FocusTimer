import Sounds from './sounds.js'

export default function Timer({ minutesDisplay, secondsDisplay, controls }) {
  let initialMinutes = Number(minutesDisplay.textContent)
  let newMinutes
  let timeTimeout

  function updateDisplay(minutes, seconds) {
    minutes = minutes === undefined ? initialMinutes : minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function plus() {
    newMinutes = Number(minutesDisplay.textContent)
    updateDisplay(newMinutes + 5, secondsDisplay.textContent)
    initialMinutes = Number(minutesDisplay.textContent)
  }

  function minus() {
    newMinutes = Number(minutesDisplay.textContent)
    if (newMinutes <= 4) {
      return
    }
    if (newMinutes <= 0) {
      return
    }
    updateDisplay(newMinutes - 5, secondsDisplay.textContent)
    initialMinutes = Number(minutesDisplay.textContent)
  }

  function hold() {
    clearInterval(timeTimeout)
  }

  function reset() {
    updateDisplay(initialMinutes, 0)
    hold()
  }

  function countdown() {
    timeTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      if (minutes <= 0 && seconds <= 0) {
        updateDisplay()
        controls.reset()
        Sounds().kitchenTimer.play()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      updateDisplay(minutes, seconds - 1)
      countdown()
    }, 1000)
  }

  return {
    initialMinutes,
    updateDisplay,
    plus,
    minus,
    hold,
    reset,
    countdown
  }
}
