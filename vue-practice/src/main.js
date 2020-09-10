import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
// import store from './store'
import createStore from './store'
import '../src/assets/reset.css'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = createStore()
// 动态的注册一个模块
store.registerModule('newModule',{
  state:{
    text:'this is newModule 456'
  }
})
// store.unregisterModule('newModule')//用于解绑module
store.watch(
  (state)=>{
    state.vcount+1 
  },
  (newState)=>{
    console.log('******newState count watched',newState)
  }
)
// 订阅监听mutation
store.subscribe((mutation,state)=>{
  console.log('mutation.type:-->',mutation.type)
  console.log('mutation.payload:--->',mutation.payload)
})
// 订阅监听action
store.subscribe((action,state)=>{
  console.log('action.type:-->',action.type)
  console.log('action.payload:--->',action.payload)
})

const app = new Vue({
      router,
      store,
      render: h => h(App),
      data:{
        test:0,
        obj:{}
      },
      watch:{
        test (nVal,oVal){
          console.log(`实例内的watch: ${nVal}:${oVal}`)
        }
      }
    }).$mount('#app')
app.$options.data.test = 'lvyamin'// 与$data并不是同一个对象
// app.$data.test= 'lvyamin'// 与$data并不是同一个对象
app.$options.render=(h)=>{
  return h('div',{},'my options render')
}
setInterval(()=>{
  app.$data.test+=1;
  let i = 0
  i++
  app.obj.a = 0;
  // app.obj.a += 1;
  app.$set(app.obj,'a',i)
  console.log('app.obj.a:',app.obj.a)
  //app.$forceUpdate()//强制组件重新渲染
},1000)
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

