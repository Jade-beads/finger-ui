import Vue from 'vue'
import App from './App.vue'
import fButton from './button/button'
import fButtonGroup from './button/button-group'
import fCollapse from './collapse/collapse'
import fCollapseItem from './collapse/collapse-item'
import fIcon from './icon/icon'
import plugin from './plugin'
import FInput from './input/input.vue'
import FPopover from './popover/popover.vue'
import FCascader from './cascader/cascader.vue'
import FCascaderItems from './cascader/cascader-items.vue'
import FSlides from './slides/slides.vue'
import FSlidesItem from './slides/slides-item.vue'
Vue.use(plugin) // 使用toast 需要使用use方法加载插件
Vue.config.productionTip = false
Vue.component('f-collapse', fCollapse)
Vue.component('f-collapse-item', fCollapseItem)
Vue.component('f-icon', fIcon)
Vue.component('f-button', fButton)
Vue.component('f-button-group', fButtonGroup)
Vue.component('f-input', FInput)
Vue.component('f-popover', FPopover)
Vue.component('f-cascader', FCascader)
Vue.component('f-cascader-items', FCascaderItems)
Vue.component('f-slides', FSlides)
Vue.component('f-slides-item', FSlidesItem)
new Vue({
  render: h => h(App),
}).$mount('#app')