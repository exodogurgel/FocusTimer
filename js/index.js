import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import Events from './events.js'
import DarkMode from './darkMode.js'
import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls
})

const sounds = Sounds()

const darkMode = DarkMode()

Events({ controls, timer, sounds, darkMode })
