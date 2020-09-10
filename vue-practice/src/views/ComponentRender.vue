<template>
    <div>
        <h1 class="title">
            Vue 组件之 render function
        </h1>
<pre>
组件中可以不写 template ，直接用 render function 去创建
以下是创建下面一个template：
<span v-text='temphtml'></span>
</pre>
<comp-render></comp-render>
    </div>
</template>
<script>
import CompRender from '@/components/ComponentFive.vue'
export default {
    name:'ComponentRender',
    components:{
        CompRender:CompRender
    },
    data() {
        return {
            temphtml:'<div class="AAA">\n  <component-for-render ref="compRender">\n    <span ref="compRef">\n      thisVal\n    </span>\n  </component-for-render>\n  <span>\n    thisVal\n  </span>\n</div>'
        }
    },
}
</script>