import DefaultTheme from 'vitepress/theme'
import WikiCover from './WikiCover.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WikiCover', WikiCover)
  }
}
