<template>
    <div id="app">
        <div class="box">
            <f-button icon="settings" @click="$toast('点击弹出提示')" loading>加载中</f-button>
        </div>
        <div class="box">
            <f-button-group>
                <f-button icon="left">上一步</f-button>
                <f-button>确定</f-button>
                <f-button icon="right" icon-position="right">下一步</f-button>
            </f-button-group>
        </div>
        <div class="box">
            <f-collapse :selected.sync="select" single>
                <f-collapse-item name="1" title="首页1">首页1</f-collapse-item>
                <f-collapse-item name="2" title="首页2">首页2</f-collapse-item>
                <f-collapse-item name="3" title="首页3">首页3</f-collapse-item>
            </f-collapse>
        </div>
    </div>
</template>

<script>
import fButton from './button/button'
export default {
    name: 'App',
    data () {
        return {
            select: ['1']
        }
    },
    methods: {
        changeHandler (key) {
            console.log(key)
        }
    }
}
</script>

<style lang="scss">
#app {
    padding: 200px;

    .box {
        margin: 20px;
    }
}
</style>
