<template>
    <div>
        <h1 class="title">vue 组件的继承</h1>

<pre>
1. 用法1：这里其实是做了一个组件的合并工作
   const comVue = Vue.extend(component) 将component扩展到Vue中
   new comVue({
       el:'#app',
       data(){
           ...
       },
       propsData:{ // 用这个才能覆盖原有的props
          ...
       },
       mounted(){ // 组件内部的先输出，这里的后输出
           ...
       }
   })
   这里就可以跟实例化VUE一样的方式去实例化
2. 用法2：
 extends:{
        CompOne // 从CompOne组件继承
    }
使用场景：使用一个公用组件时，需要扩展一些属性时可以用，无需去重新写一些组件
关于 this.$parent.$options.name
可以给组件指定一个parent,this.$parent可以获得其父组件实例
不要通过this.$parent去修改父组件的数据，尽量是去查看
</pre>
        <extend-comp :active="true" :propOne="prop1"></extend-comp>
    </div>
</template>
<script>
import ExtendComp from '@/components/ComponentTwo.vue'
export default {
    name:'CompExtend',
    components:{
        ExtendComp:ExtendComp
    },
    data() {
        return {
            prop1:'xxxxxx'
        }
    },
}
</script>
