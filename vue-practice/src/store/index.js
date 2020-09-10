import Vuex from 'vuex'
import defaultState from './state/defaultState'
import defaultMutations from './mutations/defaultMutation'
import defaultGetters from './getters/defaultGetter'
import defaultActions from './actions/defaultActions'
const isDev = process.env.NODE_ENV === 'develop'
export default ()=>{  // 这是服务端渲染需要配置的方式，当然router的道理是一样的
  const vStore =  new Vuex.Store({
      // state: {
      //   count:0
      // },
      // strict:true,//这里限制state不允许被修改，但是一般的我们不会在正式环境中去使用这个
      // 正式环境中我们不这么使用他
      strict:isDev,//有了这之后this.$state.count = 2这种组件中的赋值就不被允许 
      state:defaultState,
      // mutations: {
      //   UpdateCount(state,num){
      //     state.count=num
      //   }
      // },
      getters:defaultGetters,
      mutations:defaultMutations,
      actions: defaultActions,
      modules: {
        
        //一个模块就是一份独立的作用域
        moda:{
          state:{
            text:'I am A'
          },
          mutations:{
            UpdateText(state,newVal){
              console.log('moda-state',state)
              state.text = newVal
            }
          }
        },
        modb:{
          namespaced:true,
          state:{
            text:'I am B'
          },
          mutations:{
            UpdateText(state,newVal){
              console.log('modb-state',state)
              state.text = newVal
            }
          },
          getters:{
            GetText(state,getters,rootState){// 这里就可以通过局部作用域去访问全局作用域
              return state.text+'GetText!!!+rootState::'+rootState.fristName+'moduleBState:::'+rootState.modb.text
            }
          },
          actions:{
            AddText({state,commit,rootState}){
              commit('UpdateText',rootState.fristName), //在局部寻找UpdateText
              commit('UpdateCount',{
                num:999
              },{root:true}),////在局部寻找UpdateCount
              commit('UpdateText','moda的mutation', {root:true})
              // 这里因为没有给moda 限定命名空间 所以直接调用就可以
            }
          },
          // modules:{ 可以继续增加模块

          // }
        }
      },
      plugins:[//这里可以定义subscribe或者watch
        (vStore)=>{
          console.log('my plugin:--->',vStore)
        }
      ]
    })
    // if(module.hot){
    //   module.hot.accept([
    //     './state/defaultState',
    //     './mutations/defaultMutation',
    //     './getters/defaultGetter',
    //     './actions/defaultActions'
    //   ],()=>{
    //     const newState = require('./state/defaultState').default
    //     const newMutations = require('./mutations/defaultMutation').default
    //     const newActions= require('./getters/defaultGetter').default
    //     const newGetters = require('./actions/defaultActions').default

    //     vStore.hotUpdate({
    //       state:newState,
    //       mutations:newMutations,
    //       actions:newActions,
    //       getters:newGetters
    //     })
    //   })
    // }
    return vStore
} 
