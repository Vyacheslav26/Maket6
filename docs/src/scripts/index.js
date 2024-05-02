import '../scss/utils/fonts.scss'
import '../scss/style.scss'
import { collapse } from './ui'
import { navigation, slider } from './modules'
import { header } from './loyout'
import { index } from './page'

function initialization() {
  collapse()
  navigation()
  slider()
  header()
  index()
}
initialization()

console.log(args.at)
