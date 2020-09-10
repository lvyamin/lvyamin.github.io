<template>
    <div>
        <span>{{title}}:::</span>
        <input type="text" v-model="title">:::
        <span>{{propOne}}</span>:::
        <span v-show="active">show me this</span>
    </div>
</template>
<script>
import CompOne from '@/components/ComponentOne.vue'
export default {
    name:'extend',
    parent:'ComponentOne',// 这里是无法修改的
    props:{
        active:Boolean,
        propOne:String
    },
    data() {
        return {
            text:1,
            title:'组件的扩展' // 就会覆盖原有的title
        }
    },
    extends:{
        CompOne // 从CompOne组件继承
    },
    mounted() {
        this.$parent.prop1 = '改变了父组件的 title'
        console.log('---->$parent.name:',this.$parent.$options.name)
    },
}
</script>