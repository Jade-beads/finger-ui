<template>
    <div class="demo">
        <h2>📌 简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div class="component-wrapper">
            <div class="component-wrapper-demo">
                <f-cascader
                    :source="source"
                    popover-height="200px"
                    :selected="selected"
                    @update:selected="selected=$event"
                ></f-cascader>
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
import FCascader from '../../../src/cascader/cascader'
import FIcon from '../../../src/icon/icon'
import mixin from '../mixin'
export default {
    name: 'demo',
    mixins: [mixin],
    components: {
        FCascader,
        FIcon
    },
    data () {
        return {
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
            codeStr: `
         <f-cascader
          :source="source"
          popover-height="200px"
          :selected="selected"
          @update:selected="selected=$event"
        ></f-cascader>

        data() {
          return {
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
            }]
        `.replace(/^ {8}/gm, '').trim()
        }
    }
}
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
    display: flex;
    align-items: center;
    svg {
        font-size: 24px;
        margin: 0 10px;
    }
    button {
        margin: 0 10px;
    }
}
</style>
