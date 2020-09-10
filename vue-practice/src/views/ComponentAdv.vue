<template>
    <div>
        <h1 class="title">Vue 组件的高级属性</h1>
        <pre>
1. 插槽
Vue 的内置组件 slot
告诉组件中间插入的内容应该显示在哪里
有名字的插槽叫具名插槽
在插入的内容上写 slot = ‘slotname’ 就可以指定相应的内容显示在哪个插槽里
2. scopedSlot 作用域插槽 获得组件内部提供的数据，不影响外部的数据
slot-scope="slotProps" 通过slotProps.value 当时调用
slot 插槽上 绑定 value数据 
3. ref
可以通过ref去获取相关的组件或者节点
4. 如果越级的去获取祖辈实例的时候，可以在祖辈组件上写上：
provider(){
    return {
        lasted:this,
        value:this.value
    }
    
}
这里的provider()是function的道理是同data的，
在后辈实例中就可以写上属性
inject:['lasted','value']
this.lasted就是祖辈实例对象
        </pre>
        <comp-adv ref="compAdvRef">
            <span ref='slotRef' slot-scope="slotProps">{{slotProps.value}}:::{{slotProps.aaa}}****{{value}}</span>
            </br>
            <span slot="header">this is header</span>
            </br>
            <span slot="body">this is body</span>
        </comp-adv>
        <input type="text" v-model="value">
        {{value}}
    </div>
</template>
<script>
import CompAdv from '@/components/ComponentFour.vue'
export default {
    name:'CompAdvance',
    components:{
        CompAdv:CompAdv
    },
    data() {
        return {
            value:'this is value ttt'
        }
    },
    mounted() {
        console.log('this.$refs.compAdvRef',this.$refs.compAdvRef)
        console.log('this.$refs.slotRef',this.$refs.slotRef)
    },
    provide(){
        const datalym = {}
        Object.defineProperty(datalym,'value',{
            get:()=> {return this.value},
            enumerable:true //可读取
        }) //  这个方式不被提倡
        return{
            lasted:this,
            datalym
        }
    }

}
</script>
<style lang="less" scoped>
    
</style>