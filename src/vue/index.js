/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.28
 */

import CITab from './CITabs/CITab.vue'
import CITabs from './CITabs/CITabs.vue'

const components = [
  CITab,
  CITabs
]

const CINavigation = {
  name: 'CINavigation',
  version: '1.0.0',
  plugin: plugin,

  CITab,
  CITabs
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CINavigation = CINavigation

export default CINavigation

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
