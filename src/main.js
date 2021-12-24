import Vue from 'vue'
import App from './App.vue'
import fButton from './button/button'
import fButtonGroup from './button/button-group'
import fCollapse from './collapse/collapse'
import fCollapseItem from './collapse/collapse-item'
import fIcon from './icon/icon'
Vue.config.productionTip = false
Vue.component('f-collapse',fCollapse)
Vue.component('f-collapse-item',fCollapseItem)
Vue.component('f-icon',fIcon)
Vue.component('f-button',fButton)
Vue.component('f-button-group',fButtonGroup)
new Vue({
  render: h => h(App),
}).$mount('#app')
