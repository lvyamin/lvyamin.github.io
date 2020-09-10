<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Vue 实例</router-link>
      <!-- <router-link to="/1234567890">Vue 实例</router-link> -->
      <!-- <router-link :to="{name:'Home'}">Vue 实例-路由的另一种绑定方式</router-link> -->
      <router-link to="/about">Vue 生命周期</router-link>
      <router-link to="/databinding">Vue 数据绑定</router-link>
      <router-link to="/computedWatch">Vue computed & watch</router-link>
      <router-link to="/Direactives">Vue 内置指令</router-link>
      <router-link to="/Components">Vue 组件的定义</router-link>
      <router-link to="/ComponentsExtend">Vue 组件的继承</router-link>
      <router-link to="/ComponentModel">Vue 自定义双向绑定</router-link>
      <router-link to="/ComponentAdvance">Vue 组件的高级属性</router-link>
      <router-link to="/ComponentRender">Vue 组件之 render function</router-link>
      <router-link to="/NavigationGuard">Vue 导航守卫</router-link>
      <router-link to="/VuexStore">Vuex</router-link>
    </div>
    <div class="contents">
      <!-- transition可以包裹在组件外作用域个别组件 -->
      <transition name='fade'> 
      <router-view/>
      </transition>
      <!-- 命名视图 :用于顶部栏及菜单栏的三栏布局-->
      <!-- <router-view name='lym'/> -->
    </div>
    
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#nav {
  width:20%;
  line-height:1.25rem;
  font-size:0.75rem;
  border-right:1px dashed #ddd;
  padding-bottom: 10px;
  a {
    color: #2c3e50;
    text-decoration: none;
    display: block;
    margin: 0 0.3125rem;
    background: #ddd;
    padding: 0.3125rem 0.9375rem;
    border-radius: 0.1875rem;
    opacity: 0.6;
    margin-top: 10px;
    &.router-link-exact-active {
      color: #333;
      opacity: 1.0;
    }
  }
}
.contents{
  flex: 1;
  padding: 0.625rem;
  box-sizing: border-box;
}
p{
        font-size: 0.75rem;
    }
    h1.title{
        font-size: 0.875rem;
        line-height: 1.875rem;
        font-weight:normal;
    }
    pre{
        line-height: 1.5625rem;
    }
    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        line-height: 1.375rem;
    }
    ul{
        margin: 10px 0;
        li{
            background:paleturquoise;
            border-radius: 0.1875rem;
            margin-bottom: 1px;
            padding: 0 0.625rem;
            color: royalblue;
            opacity: 0.8;
        }
    }
</style>
