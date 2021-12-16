// import vue from 'vue/dist/vue.esm.browser'
import { checkAuth } from './login/helper'
import toastRegistry from "./plugins/toast/index";

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数?
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）

  Vue.use(toastRegistry)


  /**
   * 添加 添加登录访问
   * 第一种方法  混入组件弹窗 来控制登录   缺点：的就是别人可以通过 控制台 删除 document 方式来直接查看内容
   * 第二种方法  通过路由守卫 拦截 未授权的去 登录页面
   * */
  // Vue.mixin({
  //
  //   mounted() {
  //
  //     document.body.setAttribute('theme-vdoing', window.localStorage.getItem('theme-vdoing') || 'light');
  //     window.localStorage.setItem('theme-vdoing', window.localStorage.getItem('theme-vdoing') || 'light');
  //
  //   }
  //
  // });

  router.addRoute(  {
    path: '/login',
    component: (resolve) => require(['./login/Login'], resolve),
    hidden: true
  })





  let  ing = false;
  Vue.mixin({
    // 请确保只在 beforeMount 或者 mounted 访问浏览器 / DOM 的 API
    mounted() {
      // 校验方法
      // debugger
      const doCheck = () => {
        if (!checkAuth()) {
          router.push({ path: '/login'})
          ing=false
        }
      }
      if(!ing){
        ing=true
        doCheck()
      }

    }
  })

  /** 添加路由拦截器  来校验 是否登录
   *  问题： 开发是可以 ，打包编译 时会 报 ReferenceError: pageMeta is not defined
   *  原因:  vuepress  的路由守卫 不允许修改  只能 使用 next() 而不能使用 其他跳转 next('/login')  next(false)  router.push({ path: '/login'}) 等
   *  参考: https://stackoverflow.com/questions/63351479/vuepress-build-docs-get-referenceerror-pagemeta-is-not-defined
   *  解决方法: 我直接就放弃  改使用   Vue.mixin 混合
   *  @author @斌
   * */
  // router.beforeEach((to, from, next) => {
  //
  //       if(!checkAuth() && to.path != "/login"){
  //         console.log("没有登录",to)
  //         router.push({ path: '/login'})
  //       }else{
  //         next()
  //       }
  //
  // })

}
