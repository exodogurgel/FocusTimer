import {
  buttonlight,
  buttonDark,
  leftButtons,
  rightButtons
} from './elements.js'

export default function () {
  // function who adding white color in images the right buttons
  function rigthButtonsAddClolorsDark() {
    const rigthButtons = document.querySelectorAll('.change')
    for (let btn of rigthButtons) {
      btn.classList.toggle('dark')
    }
  }

  function darkLight() {
    buttonDark.classList.toggle('hide')
    buttonlight.classList.toggle('hide')
    leftButtons.classList.toggle('dark')
    document.body.classList.toggle('dark')
    rigthButtonsAddClolorsDark()
    rightButtons.classList.toggle('dark')
  }

  return { darkLight }
}
