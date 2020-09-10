<template>
    <div>
<pre>
定义全局组件：Vue.component('componentname',component)
定义组件可以用首字母大写的驼峰命名法，运用时候就可以用烤串式命名调用
也可以用components:{} 的方式来引入组件
当组件不是new vue 实例化出来的，那么data就需要是个方法
也有技巧可以跨过这样的限制 那就是 const data = {...}
组件中用到 :
data(){
    return data
}
如果想多次使用同一个组件，为了不会让其相互影响，我们如下处理：
就不要使用
const data = {...}
data(){
    return data
}
每一个组件有自己独立的data才不会互相影响
return是一个新建的对象，而不是一个全局的对象，这就是为什么需要data是一个方法的原因
组件内部不应该去主动修改props中的数据，如果要修改，需要在调用组件的地方去修改
</pre>
<component-one ref="comp1" :handleClick="clickMe" :propOne="prop1"></component-one>
<component-one :active="true" :propOne="prop1"></component-one>
    </div>
</template>
<script>
import ComponentOne from '@/components/ComponentOne.vue'
export default {
    name:'Components',
    components:{
        ComponentOne:ComponentOne
    },
    mounted() {
        console.log('获取组件实例：',this.$refs.comp1)
    },
    data() {
        return {
            prop1:0
        }
    },
    methods: {
       clickMe(){
           this.$emit('handleClick')
       }
    },
    mounted() {
        console.log('thisRefs:',this.$refs.comp1)
    },
    
}
</script>
