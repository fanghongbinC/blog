// nav
module.exports = [
  { text: '首页', link: '/' },

  {
    text: '后端',
    link: '/back/Java/',
    items: [
      { text: 'Java', link: '/back/Java/' },
      { text: 'Mysql', link: '/back/Mysql/' },
    ],
  },
  {
    text: '前端',
    // link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    link: '/web/',
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'JavaScript',
        items: [
          { text: 'Vue', link: '/pages/63b737/' },
          { text: '自定义组件', link: '/' },
          { text: 'js插件', link: '/pages/6c2985/' },
          { text: 'Js工具类', link: '/pages/1d7408/' },
          { text: 'JS异常', link: '/pages/8e211e/' },
          { text: 'Js笔记', link: '/pages/d20804/' },
        ],
      }
    ],
  },

  {
    text: '运维',
    link: '/pages/f0003f/',
    items: [
      { text: '项目部署', link: '/pages/f0003f/' },
      { text: 'docker', link: '/pages/ce8127/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: 'git技术', link: '/pages/6c8d8f/' },
      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '第三方',
    link: '/pages/ba6f1e/',
  },
  {
    text: '收藏',
    link: '/pages/e83385/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
