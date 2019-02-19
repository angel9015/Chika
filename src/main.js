import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueAnalytics from 'vue-analytics'
import SuiVue from 'semantic-ui-vue'

// Google Analytics - Please exclude this code when making a fork
Vue.use(VueAnalytics, {
  id: 'UA-64566721-5',
  router
})

// Normalize.css
require('normalize.css')

// Ionicons
require('vue-ionicons/ionicons.css')

/* Semantic UI for easy boilerplate */
import 'semantic-ui-css/semantic.min.css'
Vue.use(SuiVue)

Vue.config.productionTip = false

// Makes components starting with *Base* available globally
const requireComponent = require.context(
  // The relative path of the components folder
  './components/base',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/ // For everything starting with Base<Something>
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

// Initialize
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
