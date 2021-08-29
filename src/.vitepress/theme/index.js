// import { defaultTheme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CustomCode from './CustomCode.vue'
import Layout from './MyLayout.vue'

// defaultTheme.enhanceApp = ({ app }) => {
//   app.component('CustomCode', CustomCode)
// }

export default {
  ...DefaultTheme,
  // https://vitepress.vuejs.org/guide/theming.html#registering-global-components
  enhanceApp({ app }) {
    //   // register global components
    app.component('CustomCode', CustomCode)
  },
  Layout,
}
