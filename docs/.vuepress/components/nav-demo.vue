<template>
    <div class="demo">
        <h2>📌 顶栏</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-nav :selected.sync="selected" style=" margin: 20px;">
                    <f-nav-item name="home">首页</f-nav-item>
                    <f-sub-nav name="about">
                        <template slot="title">关于</template>
                        <f-nav-item name="culture">企业文化</f-nav-item>
                        <f-nav-item name="developers">开发团队</f-nav-item>
                        <f-sub-nav name="contacts">
                            <template slot="title">联系方式</template>
                            <f-nav-item name="wechat">微信</f-nav-item>
                            <f-nav-item name="qq">QQ</f-nav-item>
                            <f-sub-nav name="phone">
                                <template slot="title">手机</template>
                                <f-nav-item name="cm">移动</f-nav-item>
                                <f-nav-item name="cu">联通</f-nav-item>
                                <f-nav-item name="cn">电信</f-nav-item>
                            </f-sub-nav>
                        </f-sub-nav>
                    </f-sub-nav>
                    <f-nav-item name="hire">招聘</f-nav-item>
                </f-nav>
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

        <h2>📌 侧栏</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-nav :selected.sync="selected" vertical style=" width: 200px;">
                    <f-nav-item name="home">首页</f-nav-item>
                    <f-sub-nav name="about">
                        <template slot="title">关于</template>
                        <f-nav-item name="culture">企业文化</f-nav-item>
                        <f-nav-item name="developers">开发团队</f-nav-item>
                        <f-sub-nav name="contacts">
                            <template slot="title">联系方式</template>
                            <f-nav-item name="wechat">微信</f-nav-item>
                            <f-nav-item name="qq">QQ</f-nav-item>
                            <f-sub-nav name="phone">
                                <template slot="title">手机</template>
                                <f-nav-item name="cm">移动</f-nav-item>
                                <f-nav-item name="cu">联通</f-nav-item>
                                <f-nav-item name="cn">电信</f-nav-item>
                            </f-sub-nav>
                        </f-sub-nav>
                    </f-sub-nav>
                    <f-nav-item name="hire">招聘</f-nav-item>
                </f-nav>
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
import FNav from '../../../src/nav/nav'
import FNavItem from '../../../src/nav/nav-item'
import FSubNav from '../../../src/nav/sub-nav'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'

export default {
    components: {
        FNav, FIcon, FNavItem, FSubNav
    },
    mixins: [mixin],
    data () {
        return {
            selected: 'home',
            codeStr: `
          data () {
            return {
              selected: 'home'
            }
          }

          <f-nav :selected.sync="selected" style=" margin: 20px;">
            <f-nav-item name="home">首页</f-nav-item>
            <f-sub-nav name="about">
              <template slot="title">关于</template>
              <f-nav-item name="culture">企业文化</f-nav-item>
              <f-nav-item name="developers">开发团队</f-nav-item>
              <f-sub-nav name="contacts">
                <template slot="title">联系方式</template>
                <f-nav-item name="wechat">微信</f-nav-item>
                <f-nav-item name="qq">QQ</f-nav-item>
                <f-sub-nav name="phone">
                  <template slot="title">手机</template>
                  <f-nav-item name="cm">移动</f-nav-item>
                  <f-nav-item name="cu">联通</f-nav-item>
                  <f-nav-item name="cn">电信</f-nav-item>
                </f-sub-nav>
              </f-sub-nav>
            </f-sub-nav>
            <f-nav-item name="hire">招聘</f-nav-item>
          </f-nav>
          `.replace(/^ {8}/gm, '').trim(),
            codeStr2: `
            data () {
              return {
                selected: 'home'
              }
            }

            <f-nav :selected.sync="selected" vertical style="width: 200px;">
              <f-nav-item name="home">首页</f-nav-item>
              <f-sub-nav name="about">
                <template slot="title">关于</template>
                <f-nav-item name="culture">企业文化</f-nav-item>
                <f-nav-item name="developers">开发团队</f-nav-item>
                <f-sub-nav name="contacts">
                  <template slot="title">联系方式</template>
                  <f-nav-item name="wechat">微信</f-nav-item>
                  <f-nav-item name="qq">QQ</f-nav-item>
                  <f-sub-nav name="phone">
                    <template slot="title">手机</template>
                    <f-nav-item name="cm">移动</f-nav-item>
                    <f-nav-item name="cu">联通</f-nav-item>
                    <f-nav-item name="cn">电信</f-nav-item>
                  </f-sub-nav>
                </f-sub-nav>
              </f-sub-nav>
              <f-nav-item name="hire">招聘</f-nav-item>
            </f-nav>
            `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'var';
.box {
    height: 300px;
    background: $blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>