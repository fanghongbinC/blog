const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
// const path = require('path')
//
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
//

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "博客文档",
  description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。',
   base: '/blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },
  devServer: {
    // host: '0.0.0.0',
    port: 1010,
    open: true,
    disableHostCheck: true
  },
  // 配置别名 还有问题
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('/docs/.vuepress')
  //     }
  //   }
  // },
  head,
  plugins,
  themeConfig,
}
