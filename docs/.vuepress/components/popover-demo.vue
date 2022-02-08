<template>
    <div class="demo">
        <h2>📌 支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-popover>
                    <f-button>上方弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="bottom">
                    <f-button>下方弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="left">
                    <f-button>左边弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="right">
                    <f-button>右边弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
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

        <h2>📌 将触发方式改为 hover</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-popover trigger="hover">
                    <f-button>上方弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="bottom" trigger="hover">
                    <f-button>下方弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="left" trigger="hover">
                    <f-button>左边弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
                <f-popover position="right" trigger="hover">
                    <f-button>右边弹出</f-button>
                    <template slot="content">弹出内容</template>
                </f-popover>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr2}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(1)" ref="xxx">
                <f-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></f-icon>
                <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import FButton from '../../../src/button/button'
import FPopover from '../../../src/popover/popover'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'

export default {
    components: { FButton, FPopover, FIcon },
    mixins: [mixin],
    data () {
        return {
            codeStr: `
          <f-popover>
            <f-button>上方弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="bottom">
            <f-button>下方弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="left">
            <f-button>左边弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="right">
            <f-button>右边弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
      `.replace(/^ {8}/gm, '').trim(),
            codeStr2: `
          <f-popover trigger="hover">
            <f-button>上方弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="bottom" trigger="hover">
            <f-button>下方弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="left" trigger="hover">
            <f-button>左边弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
          <f-popover position="right" trigger="hover">
            <f-button>右边弹出</f-button>
            <template slot="content">
              弹出内容
            </template>
          </f-popover>
      `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>