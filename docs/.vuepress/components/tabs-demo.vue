<template>
    <div class="demo">
        <h2>📌 简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-tabs :selected="selected">
                    <f-tabs-head>
                        <f-tabs-item name="1">1</f-tabs-item>
                        <f-tabs-item name="2">2</f-tabs-item>
                    </f-tabs-head>
                    <f-tabs-body>
                        <f-tabs-pane name="1">content 1</f-tabs-pane>
                        <f-tabs-pane name="2">content 2</f-tabs-pane>
                    </f-tabs-body>
                </f-tabs>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(0)" ref="xxx">
                <f-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></f-icon>
                <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import FTabs from '../../../src/tabs/tabs'
import FTabsBody from '../../../src/tabs/tabs-body'
import FTabsHead from '../../../src/tabs/tabs-head'
import FTabsItem from '../../../src/tabs/tabs-item'
import FTabsPane from '../../../src/tabs/tabs-pane'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'

export default {
    components: { FTabs, FTabsBody, FTabsHead, FTabsItem, FTabsPane, FIcon },
    mixins: [mixin],
    data () {
        return {
            selected: '1',
            codeStr: `
          data:{
            selected: '1'
          }

          <f-tabs :selected="selected">
            <f-tabs-head>
              <f-tabs-item name="1">1</f-tabs-item>
              <f-tabs-item name="2">2</f-tabs-item>
            </f-tabs-head>
            <f-tabs-body>
              <f-tabs-pane name="1">content 1</f-tabs-pane>
              <f-tabs-pane name="2">content 2</f-tabs-pane>
            </f-tabs-body>
          </f-tabs>
      `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>