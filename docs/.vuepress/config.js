const path = require('path')
module.exports = {
  base: '/',
  title: '🚲 Finger UI',
  description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/finger.jpg',
      type: 'image/jpg'
    }]
  ],
  themeConfig: {
    // repo: 'zyqq/wheel', // 默认是 false, 设置为 true 来启用
    // lastUpdated: 'Last Updated',
    // editLinks: true,
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '交流',
        link: 'https://github.com/zyqq/wheel/issues'
      },
    ],
    sidebarDepth: 2,
    sidebar: [{
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [{
            title: '布局组件',
            children: [
              '/components/button',
            ]
          },
          '/components/cascader',
          '/components/collapse',
          '/components/grid',
          '/components/icon',
          '/components/input',
          '/components/layout',
          '/components/nav',
          '/components/pager',
          '/components/popover',
          '/components/slides',
          '/components/toast',
          '/components/tabs'
        ]
      },
    ]
  },
  scss: {
    includePaths: [path.join(__dirname, '../../styles')]
  },
  markdown: {
    lineNumbers: true
  }
}