<template>
    <div>
        <h1 class="title">Vue 导航守卫</h1>
<pre>
1. 导航守卫：
    1).路由跳转之前 beforeEach((to,frome,next)=>{next()})
    2).路由跳转成功 beforeResolve((to,frome,next)=>{})
    3).路由跳转之后 afterEach((to,frome)=>{})
    4).路由的配置里还可以设置一个属性方法 beforeEnter:(to,from,next)=>{next()}
    5).也可以将这些钩子函数定义于组件中，分别是：
       beforeRouteEnter 这个钩子函数里，在next()之前是拿不到实例数据的
       只有在next中接受的回调来获取实例数据
       beforeRouteUpdate 不同的路由显示同一个组件的时候就会被触发，
       比如说路由里有传ID参数，每次获取的数据不同，但是使用的是用一个组件
       beforeRouteLeave

       如果在相同组件显示的不同路由下，使用mounted，就会发现这里mounted只是第一触发了，第二次就没有被触发，
       也就是说，我们需要通过eforeRouteUpdate来执行一些操作，或者使用watch
       

2. 异步组件，也就是按需加载组件
component:()=>import('../views/ComponentRender.vue')
</pre>
    </div>
</template>
<script>
export default {
    name:'NavGuard',
    beforeRouteEnter (to, from, next) {
        // ...
        console.log('------->>>>>>beforeRouteEnter')
        next(vm=>{
            console.log('------->next中的回调',vm)
        })
    },
    beforeRouteUpdate (to, from, next) {
        // ...
        console.log('------->>>>>>beforeRouteUpdate')
        next()
    },
    beforeRouteLeave (to, from, next) {
        // ...可以做一些提示，比如填了一个表单，当用户跳转的时候可以询问是否要保存数据
        console.log('------->>>>>>beforeRouteLeave')
        if(global.confirm('你确定要离开吗？')){
            next()
        }
        
    },
}
</script>