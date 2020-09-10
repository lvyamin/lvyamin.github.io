<template>
  <div class="about" >
    {{msg}} - 生命周期
<pre>
执行顺序如下：

beforeCreate(){} -- 实例初始化时必定会执行
服务端渲染只会调用beforeCreate，以下不会调用

created(){} -- 实例初始化时必定会执行
服务端渲染只会调用created，以下不会调用

beforeMount(){} -- 实例挂载到DOM节点时候会执行

mounted(){} -- 实例挂载到DOM节点时候会执行
做跟DOM有关的可以放在其中，这里的DOM节点才会被挂载成功

------------------------以上的方法都是调用一次--------------------------

beforeUpdate(){} -- 实例数据更新的时候执行

updated(){} -- 实例数据更新的时候执行

activated(){} -- keepAlive的组件有关系

deactivated(){} -- keepAlive的组件有关系

beforeDestroy(){} -- 实例销毁会执行

destroyed(){} -- 实例销毁会执行

在vue实例中如果不指定 el，则只执行到 created
应为mount 不知道挂载到哪个节点上

app.$mount('#app') 和 el:"#app" 实例中的 mounted(){}
是等价的

app.$destroy() 主动销毁组件
render(h) {
console.log('render:')
  return h('div',{},this.msg)
},
renderError(h, err) {
  console.log('当render报错时,页面会渲染err.stack，只报本组件，子组件的不可以报出')
  return h('div',{},err.stack)
},
errorCaptured: (err, vm, info) => {
  console.log('会向上冒泡，并且正式环境可以使用，捕获所有组件的报错')
},
</pre>
  </div>
</template>

<script>
export default {
  name:'lifecycle',
  data() {
    return {
      msg:'lifecycle'
    }
  },
  beforeCreate() {
    console.log('beforeCreate:',this.$el)
  },
  created() {
    console.log('created:',this.$el)
  },
  beforeMount() {
    console.log('beforeMount:',this.$el)
  },
  mounted() {
    console.log('mounted:',this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdate:',this)
  },
  updated() {
    console.log('updated:',this)
  },
  activated() {
    console.log('activated:',this)
  },
  deactivated() {
    console.log('deactivated:',this)
  },
  beforeDestroy() {
    console.log('beforeDestroy:',this)
  },
  destroyed() {
    console.log('destroyed:',this)
  },
  render(h) {
    console.log('render:')
    return h('div',{},this.msg)
  },
  renderError(h, err) {
    console.log('当render报错时,页面会渲染err.stack，只报本组件，子组件的不可以报出')
    return h('div',{},err.stack)
  },
  errorCaptured: (err, vm, info) => {
    console.log('会向上冒泡，并且正式环境可以使用，捕获所有组件的报错')
  },
}
</script>

<style lang="less" scoped>
  pre{
    line-height: 1.5625rem;
  }
</style>
