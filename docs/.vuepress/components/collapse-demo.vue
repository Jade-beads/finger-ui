<template>
    <div class="demo">
        <h2>📌 简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-collapse :selected.sync="slectedTabs">
                    <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
                    <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
                    <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
                </f-collapse>
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
        <h2>📌 手风琴效果</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-collapse :selected.sync="select" single>
                    <f-collapse-item name="4" title="首页1">首页1</f-collapse-item>
                    <f-collapse-item name="5" title="首页2">首页2</f-collapse-item>
                    <f-collapse-item name="6" title="首页3">首页3</f-collapse-item>
                </f-collapse>
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
import FCollapse from '../../../src/collapse/collapse'
import FCollapseItem from '../../../src/collapse/collapse-item'
import mixin from '../mixin'
export default {
    components: {
        FCollapse,
        FCollapseItem
    },
    mixins: [mixin],
    data () {
        return {
            slectedTabs: ['1'],
            select: ['4'],
            codeStr: `
          <f-collapse :selected.sync="slectedTabs">
            <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
            <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
            <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
          </f-collapse>
      `.replace(/^ {8}/gm, '').trim(),
            slectedTabs: [],
            codeStr2: `
          <f-collapse :selected.sync="slectedTabs" single>
            <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
            <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
            <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
          </f-collapse>
      `.replace(/^ {8}/gm, '').trim(),
            slectedTabs2: []
        }
    }
}
</script>