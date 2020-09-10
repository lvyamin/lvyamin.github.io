<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'CompAdv',
    data() {
        return {
            style:{
                width:'200px',
                height:'200px',
                border:'1px solid #ddd'
            }
        }
    },
}
</script>
