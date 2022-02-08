<template>
    <div class="demo">
        <h2>📌 简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-input></f-input>
                <f-input value="中文"></f-input>
                <f-input value="中文" disabled></f-input>
                <f-input value="中文" readonly></f-input>
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

        <h2>📌 双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-input v-model="value"></f-input>
                <div style="margin-top: 20px">value: {{value}}</div>
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
import FInput from '../../../src/input/input'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'

export default {
    components: { FInput, FIcon },
    mixins: [mixin],
    data () {
        return {
            value: '1',
            selected: '1',
            codeStr: `
          <f-input></f-input>
          <f-input value="中文"></f-input>
          <f-input value="中文" disabled></f-input>
          <f-input value="中文" readonly></f-input>
        `.replace(/^ {8}/gm, '').trim(),
            codeStr2: `
          data:{
            value: '1'
          }

          <f-input v-model="value"></f-input>
          <div style="margin-top: 20px">
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>