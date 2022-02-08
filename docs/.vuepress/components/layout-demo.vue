<template>
    <div class="demo">
        <h2>📌 圣杯布局</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-layout style="color: white; margin-bottom:50px;">
                    <f-header
                        style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                    >header</f-header>
                    <f-content
                        style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
                    >content</f-content>
                    <f-footer
                        style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                    >footer</f-footer>
                </f-layout>
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

        <h2>📌 多栏布局 1</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                    <f-header
                        style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                    >header</f-header>
                    <f-layout>
                        <f-sider
                            style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;"
                        >sider</f-sider>
                        <f-content
                            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
                        >content</f-content>
                    </f-layout>
                    <f-footer
                        style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                    >footer</f-footer>
                </f-layout>
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

        <h2>📌 多栏布局 2</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                    <f-sider
                        style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;"
                    >sider</f-sider>
                    <f-layout>
                        <f-header
                            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                        >header</f-header>
                        <f-content
                            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
                        >content</f-content>
                        <f-footer
                            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
                        >footer</f-footer>
                    </f-layout>
                </f-layout>
            </div>
            <div class="code-content" v-highlight style="height: 0;">
                <div class="code-content-height">
                    <pre><code class="html">{{codeStr3}}</code></pre>
                </div>
            </div>
            <div class="lock-code" @click="showCode(2)" ref="xxx">
                <f-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></f-icon>
                <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
* {
    box-sizing: border-box;
}
</style>
<script>
import FLayout from '../../../src/layout/layout'
import FHeader from '../../../src/layout/header'
import FFooter from '../../../src/layout/footer'
import FContent from '../../../src/layout/content'
import FSider from '../../../src/layout/sider'
import FIcon from '../../../src/icon/icon'
import FButton from '../../../src/button/button.vue'
import mixin from '../mixin'

export default {
    components: { FLayout, FHeader, FFooter, FContent, FSider, FIcon, FButton },
    mixins: [mixin],
    data () {
        return {
            codeStr: `
          <f-layout style="color: white; margin-bottom:50px;">
            <f-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </f-header>
            <f-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </f-content>
            <f-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </f-footer>
          </f-layout>
        `.replace(/^ {8}/gm, '').trim(),
            codeStr2: `
            <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
              <f-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </f-header>
              <f-layout>
                <f-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: black;">
                  sider
                </f-sider>
                <f-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                  content
                </f-content>
              </f-layout>
              <f-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </f-footer>
            </f-layout>
        `.replace(/^ {8}/gm, '').trim(),
            codeStr3: `
          <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <f-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
              sider
            </f-sider>
            <f-layout>
              <f-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </f-header>
              <f-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </f-content>
              <f-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </f-footer>
            </f-layout>
          </f-layout>

        `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>