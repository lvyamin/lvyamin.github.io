<template>
    <div :style="style">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot  name="body"></slot>
        </div>
        <!--  这里面要放什么，需要根据情况而定 -->
        <slot :value="value" aaa='111'></slot>
        <component-mod></component-mod>
    </div>
</template>
<script>
import ComponentMod from '@/components/ComponentThree.vue'
export default {
    name:'CompAdv',
    components:{
        ComponentMod:ComponentMod
    },
    data() {
        return {
            style:{
                width:'200px',
                height:'200px',
                border:'1px solid #ddd',
                background:'#ccc'
            },
            value:'componentVal'
        }
    },
}
</script>
<style lang="less" scoped>
.header{
    background: skyblue;
}
.body{
    background: tan;
}
</style>