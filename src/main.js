import Vue from 'vue'
import App from './App.vue'
import fCollapse from './collapse/collapse'
import fCollapseItem from './collapse/collapse-item'

Vue.config.productionTip = false
Vue.component('f-collapse',fCollapse)
Vue.component('f-collapse-item',fCollapseItem)
new Vue({
  render: h => h(App),
}).$mount('#app')
