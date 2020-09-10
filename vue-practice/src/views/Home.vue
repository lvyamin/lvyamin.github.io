<template>
    <div ref="home">
     <h1 class="title">实例的各种属性：</h1>
     <pre>
      console.log('$data:',app.$data)
      console.log('$props:',app.$props)
      console.log('$el:',app.$el)
      console.log('$options:',app.$options)
      console.log('$root:',app.$root)
      console.log('$root===app:',app.$root===app)
      console.log('$children:',app.$children)
      console.log('$slots:',app.$slots)
      console.log('$scopeslots:',app.$scopeSlots)
      console.log('$refs:',app.$refs)
      console.log('$isServer:',app.$isServer)
     </pre>
     <h1 class="title">实例的各种方法：</h1>
     <pre>
      const unWatch = app.$watch('test',(newVal,oldVal)=>{
        console.log(`${newVal}:${oldVal}`)
      })

      setTimeout(()=>{
        unWatch()
      },3000)// watch 事件销毁

      app.$on('testOn',(a,b)=>{
        console.log(`app.$on:testOn ${a}:${b}`)
      })
      app.$once('testOnce',(a,b)=>{
        console.log(`app.$once:testOnce ${a}:${b}`)
      })
      app.$emit('testOn',1,2)
      // emit 和 on 作用于同一个组件上才生效
      setInterval(()=>{
        app.$emit('testOn',3,4)
      },3000)

      setInterval(()=>{
        app.$emit('testOnce',0,0)
      },3000)

      // app.$nextTick(()=>{}) // 将回调延迟到下次DOM更新循环之后执行
      // 因为vm渲染DOM是异步的，上面方法就可以让其渲染变成同步的
     </pre>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  // props:['id'],// 这里的props调用了路由，所以作为一个组件引用于别的组件中就会有问题
  mounted() {
    // console.log('this.$route:',this.$route)
    // console.log('this.id:',this.id)// 这就可以拿到router里的路径上的参数
    //这里可以拿到路由上的各种参数
    //params: {id: "1234567890"}
    //path: "/1234567890"
    //query:{a: "123",b: "456"
    //不通过$route，还可以在路由里设置props属性来获取参数
  },
}
</script>

<style lang="less" scoped>
  h1.title{
    font-size: 0.875rem;
    line-height: 1.875rem;
    font-weight:normal;
  }
</style>
