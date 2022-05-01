export default function Controls({ buttonPause, buttonPlay }) {
  function removeButtonPress(active, noActive1, noActive2, noActive3) {
    active.classList.toggle('press')
    noActive1.classList.remove('press')
    noActive2.classList.remove('press')
    noActive3.classList.remove('press')
  }

  function removeColorButtonPress(change, remove1, remove2, remove3) {
    document.querySelector(`.${change} .change`).classList.toggle('add')
    document.querySelector(`.${remove1} .change`).classList.remove('add')
    document.querySelector(`.${remove2} .change`).classList.remove('add')
    document.querySelector(`.${remove3} .change`).classList.remove('add')
  }

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
    reset
  }
}
