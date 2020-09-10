<template>
    <div>
        <h1 class="title">Vue 组件内部如何实现自定义双向绑定</h1>
<pre>
使用场景：
如果一个组件中又需要value作为双向绑定的数据，又需要它去实现一个另外的功能
又不希望冲突
我们就可以在组件中添加model属性来解决这个问题
model:{
    prop:'value1',
    event:'change'
}
props:['value1']

</pre>
<component-mod :value1="value" @lyminput="value1=arguments[0]"></component-mod>
<component-mod :value="value" v-model="value"></component-mod>
{{value}}
    </div>
</template>
<script>
import ComponentMod from '@/components/ComponentThree.vue'
export default {
    name:'CompModel',
    components:{
        ComponentMod:ComponentMod
    },
    data() {
        return {
            value:'123'
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>