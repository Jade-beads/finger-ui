<template>
    <div class="demo">
        <h2>📌 简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-button>默认按钮</f-button>
                <f-button icon="setting">带 icon 按钮</f-button>
                <f-button :loading="true">加载按钮</f-button>
                <f-button disabled>禁用按钮</f-button>
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

        <h2>📌 按钮组</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-button-group>
                    <f-button icon="left">上一页</f-button>
                    <f-button>更多</f-button>
                    <f-button icon="right">下一页</f-button>
                </f-button-group>
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
import FButtonGroup from '../../../src/button/button-group'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'
export default {
    name: 'demo',
    mixins: [mixin],
    components: {
        FButton,
        FIcon,
        FButtonGroup
    },
    data () {
        return {
            codeStr: `
          <f-button>默认按钮</f-button>
          <f-button icon="settings">默认按钮</f-button>
          <f-button :loading="true">默认按钮</f-button>
          <f-button disabled>默认按钮</f-button>
        `.replace(/^ {8}/gm, '').trim(),

            codeStr2: `
          <f-button-group>
            <f-button icon="left">
              上一页
            </f-button>
            <f-button>
              更多
            </f-button>
            <f-button icon="right">
              下一页
            </f-button>
          </f-button-group>
          `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
