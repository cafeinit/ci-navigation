/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.09.07
 */

import CIPagination from './CIPagination.vue'
import CITab from './CITabs/CITab.vue'
import CITabs from './CITabs/CITabs.vue'

const components = [
  CIPagination,
  CITab,
  CITabs
]

const CINavigation = {
  name: 'CINavigation',
  version: '1.1.0',
  plugin: plugin,

  CIPagination,
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
