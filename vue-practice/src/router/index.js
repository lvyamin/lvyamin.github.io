import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home  from '../views/Home.vue'
// import About  from '../views/About.vue'

Vue.use(VueRouter) // vue插件的使用方式

  const routes = [
  // {
  //   path:'/',
  //   redirect:'/about' // 默认路由如果是‘/’将自动跳转到‘/about’
  // },
  {
    // path: '/:id',
    path:'/',
    name: 'Home',
    // props:true,可以用于解耦组件

    // props:{
    //   id:'123456789'
    // },
    // props:(route)=>({id:route.query.a}),
    // components: {// 视图命名的时候能用到
    //     default:Home,
    //     lym:About
      
    // },
    component:()=>import('../views/Home.vue'),
    meta:{
      title:'myApp',
      keywords:'key',
      description:'desc'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/databinding',
    name:'Databinding',
    component: () => import('../views/DataBinding.vue')
  },
  {
    path:'/computedWatch',
    name:'ComputedWatch',
    component:() => import('../views/ComputedWatch.vue'),

    // children:[//子路由列表,如果要正常使用，需要在相应的组件中插入一个<router-view></router-view>
    //   {
    //     path:'/databinding',
    //     name:'Databinding',
    //     component: () => import('../views/DataBinding.vue')
    //   }
    // ]
  },
  {
    path:'/Direactives',
    name:'Direactive',
    component:()=>import('../views/Directives.vue')
  },
  {
    path:'/Components',
    name:'Component',
    component:()=> import('../views/Components.vue')
  },
  {
    path:'/ComponentsExtend',
    name:'componentsextend',
    component:()=>import('../views/ComponentsExtend.vue')
  },
  {
    path:'/ComponentModel',
    name:'Componentmodel',
    component:()=>import('../views/ComponentModel.vue')
  },
  {
    path:'/ComponentAdvance',
    name:'CompAdvance',
    component:()=>import('../views/ComponentAdv.vue')
  },
  {
    path:'/ComponentRender',
    name:'CompRender',
    component:()=>import('../views/ComponentRender.vue')
  },
  {
    path:'/NavigationGuard',
    name:'/Guard',
    beforeEnter: (to, from, next) => {
      console.log('----------->>>beforeEnter:(to, from, next)')
      next()
    },
    component:()=>import('../views/NavigationGuard.vue')
  },
  {
    path:'/VuexStore',
    name:'VmStore',
    component:()=>import('../views/VuexStore.vue')
  }
]

const router = new VueRouter({
  mode: 'history',// 如果设置为hash 则显示http://localhost:8080/computedWatch#/
  base: '/base/', //基路径：process.env.BASE_URL,在所有path之前添加的，并不是强制性的，用于区分路径的时候可以用
  // linkActiveClass:'lym-active',router-link 的 a 标签的样式
  // linkExactActiveClass:'lym-exact-active',当前路由样式
  scrollBehavior(to,from,savePosition){//页面跳转时候要不要滚动
    //一般用法
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  },
  // parseQuery(query/**type:String */){//...?a=123&b=456,把路由中的参数转换为json

  // },
  // stringifyQuery(){

  // },
  fallback:false,//单页应用设置为多页应用
  routes
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 可以在其中进行一些数据的校验
  // 可以做登录校验，验证一些页面是需要验证登录的
  // if(to.fullPath==='/login'){
  //   next('/login')
  // 也可以这么写
  //   next({path:'/login',name:'login',replace:true})这里的replace：true 不会往history栈堆里推，也就是返回的时候会返回到哪个页面
  //  next 可以传的和router-link里设置的props是一样的
  // }else{
  //   next()
  // }
  console.log('------>>>>>router.beforeEach:')
  next()
})
router.beforeResolve((to,frome,next)=>{
  // 用处也是同上的
  console.log('------>>>>>router.beforeResolve:')
  next()
})
router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('------>>>>>router.afterEach:')
})

export default router
