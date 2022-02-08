<template>
    <div id="app">
        <div class="box">
            <f-slides :selected.sync="sildeSelected">
                <f-slides-item name="1">
                    <div class="box-item">1</div>
                </f-slides-item>
                <f-slides-item name="2">
                    <div class="box-item">2</div>
                </f-slides-item>
                <f-slides-item name="3">
                    <div class="box-item">3</div>
                </f-slides-item>
            </f-slides>
        </div>
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
            <f-collapse :selected.sync="select">
                <f-collapse-item name="1" title="首页1">首页1</f-collapse-item>
                <f-collapse-item name="2" title="首页2">首页2</f-collapse-item>
                <f-collapse-item name="3" title="首页3">首页3</f-collapse-item>
            </f-collapse>
            <f-collapse :selected.sync="selectSingle" single>
                <f-collapse-item name="4" title="首页1">首页1</f-collapse-item>
                <f-collapse-item name="5" title="首页2">首页2</f-collapse-item>
                <f-collapse-item name="6" title="首页3">首页3</f-collapse-item>
            </f-collapse>
        </div>
        <div class="box">
            <f-input></f-input>
            <f-input value="中文"></f-input>
            <f-input value="中文" disabled></f-input>
            <f-input value="中文" readonly></f-input>
        </div>
        <div>
            <f-popover>
                <f-button>上方弹出</f-button>
                <template slot="content">弹出内容</template>
            </f-popover>
            <f-popover position="bottom">
                <f-button>下方弹出</f-button>
                <template slot="content">弹出内容</template>
            </f-popover>
            <f-popover position="left">
                <f-button>左方弹出</f-button>
                <template slot="content">弹出内容</template>
            </f-popover>
            <f-popover position="right">
                <f-button>右方弹出</f-button>
                <template slot="content">弹出内容</template>
            </f-popover>
        </div>
        <div class="box">
            <f-cascader
                :source="source"
                popover-height="200px"
                :selected="selected"
                @update:selected="selected=$event"
            ></f-cascader>
        </div>
        <div class="box">
            <f-pager :total-page="10" :current-page.sync="currentPage"></f-pager>
        </div>
        <div class="box">
            <f-nav :selected.sync="navSelected" style=" margin: 20px;">
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
        <div class="box">
            <span>侧边导航</span>
            <f-nav :selected.sync="sildeNavselected" vertical style="width: 200px;">
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
    </div>
</template>

<script>
import fButton from './button/button'
export default {
    name: 'App',
    data () {
        return {
            select: ['1'],
            selectSingle: [],
            selected: [],
            source: [{
                value: 'zhinan',
                name: '指南',
                children: [{
                    value: 'shejiyuanze',
                    name: '设计原则',
                    children: [{
                        value: 'yizhi',
                        name: '一致'
                    }, {
                        value: 'fankui',
                        name: '反馈'
                    }, {
                        value: 'xiaolv',
                        name: '效率'
                    }, {
                        value: 'kekong',
                        name: '可控'
                    }]
                }, {
                    value: 'daohang',
                    name: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        name: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        name: '顶部导航'
                    }]
                }]
            }, {
                value: 'zujian',
                name: '组件',
                children: [{
                    value: 'basic',
                    name: 'Basic',
                    children: [{
                        value: 'layout',
                        name: 'Layout 布局'
                    }, {
                        value: 'color',
                        name: 'Color 色彩'
                    }, {
                        value: 'typography',
                        name: 'Typography 字体'
                    }, {
                        value: 'icon',
                        name: 'Icon 图标'
                    }, {
                        value: 'button',
                        name: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    name: 'Form',
                    children: [{
                        value: 'radio',
                        name: 'Radio 单选框'
                    }, {
                        value: 'checkbox',
                        name: 'Checkbox 多选框'
                    }, {
                        value: 'input',
                        name: 'Input 输入框'
                    }, {
                        value: 'input-number',
                        name: 'InputNumber 计数器'
                    }, {
                        value: 'select',
                        name: 'Select 选择器'
                    }, {
                        value: 'cascader',
                        name: 'Cascader 级联选择器'
                    }, {
                        value: 'switch',
                        name: 'Switch 开关'
                    }, {
                        value: 'slider',
                        name: 'Slider 滑块'
                    }, {
                        value: 'time-picker',
                        name: 'TimePicker 时间选择器'
                    }, {
                        value: 'date-picker',
                        name: 'DatePicker 日期选择器'
                    }, {
                        value: 'datetime-picker',
                        name: 'DateTimePicker 日期时间选择器'
                    }, {
                        value: 'upload',
                        name: 'Upload 上传'
                    }, {
                        value: 'rate',
                        name: 'Rate 评分'
                    }, {
                        value: 'form',
                        name: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    name: 'Data',
                    children: [{
                        value: 'table',
                        name: 'Table 表格'
                    }, {
                        value: 'tag',
                        name: 'Tag 标签'
                    }, {
                        value: 'progress',
                        name: 'Progress 进度条'
                    }, {
                        value: 'tree',
                        name: 'Tree 树形控件'
                    }, {
                        value: 'pagination',
                        name: 'Pagination 分页'
                    }, {
                        value: 'badge',
                        name: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    name: 'Notice',
                    children: [{
                        value: 'alert',
                        name: 'Alert 警告'
                    }, {
                        value: 'loading',
                        name: 'Loading 加载'
                    }, {
                        value: 'message',
                        name: 'Message 消息提示'
                    }, {
                        value: 'message-box',
                        name: 'MessageBox 弹框'
                    }, {
                        value: 'notification',
                        name: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    name: 'Navigation',
                    children: [{
                        value: 'menu',
                        name: 'NavMenu 导航菜单'
                    }, {
                        value: 'tabs',
                        name: 'Tabs 标签页'
                    }, {
                        value: 'breadcrumb',
                        name: 'Breadcrumb 面包屑'
                    }, {
                        value: 'dropdown',
                        name: 'Dropdown 下拉菜单'
                    }, {
                        value: 'steps',
                        name: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    name: 'Others',
                    children: [{
                        value: 'dialog',
                        name: 'Dialog 对话框'
                    }, {
                        value: 'tooltip',
                        name: 'Tooltip 文字提示'
                    }, {
                        value: 'popover',
                        name: 'Popover 弹出框'
                    }, {
                        value: 'card',
                        name: 'Card 卡片'
                    }, {
                        value: 'carousel',
                        name: 'Carousel 走马灯'
                    }, {
                        value: 'collapse',
                        name: 'Collapse 折叠面板'
                    }]
                }]
            }, {
                value: 'ziyuan',
                name: '资源',
                children: [{
                    value: 'axure',
                    name: 'Axure Components'
                }, {
                    value: 'sketch',
                    name: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    name: '组件交互文档'
                }]
            }],
            sildeSelected: '1',
            currentPage: 1,
            navSelected: 'home',
            sildeNavselected: 'home'
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
.box-item {
    height: 300px;
    background: blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
