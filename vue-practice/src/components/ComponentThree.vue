<template>
    <div>
        <span>{{datalym.value}}</span>
        <input type="text" @input="handleInput">
    </div>
</template>
<script>
export default {
    name:'ComponentMod',
    model:{
        prop:'value1',
        event:'lyminput'
    },
    props:['value','value1'],
    methods: {
        handleInput(e){
            console.log('=====>>>>>>',e.target.value)
            this.$emit('lyminput',e.target.value)//emit 出去一个事件名称，和一个新的值
        }
    },
    inject:['lasted','datalym'],
    mounted() {
        console.log('======>>>>>thisProvide',this.lasted,this.datalym.value)
    },
}
</script>