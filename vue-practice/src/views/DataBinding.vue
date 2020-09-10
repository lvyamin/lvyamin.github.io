<template>
    <div>
        <p>vue 数据绑定</p>
        <p>{{isActive}}-- 转换成了字符串</p>
        <p>{{isActive ? 'isActive' : 'no isActive'}}</p>
        <p :style="[style1,style2]">{{html}}</p>
        <p v-html="html"></p>
        <p v-bind:id="aaa" @click="handleClick()">{{aaa}}</p>
        <p>{{getJoinArr(myArry)}}</p>
        <pre>
            ---------- 关于指令的简写 ---------- 
            v-bind:id="" 等价于 :id= "" 绑定属性
            v-on:click="" 等价于 @click="" 绑定事件
            特殊属性的绑定：
            class="" 
            动态绑定class =>  有以下三种写法
            :class="{active:true}"  class="active"
            :class="[true ? 'active' : '']"  class="active"
            :class="[{active:true}]"  class="active"
            也可以通过 computed 来处理
            :style=""
            可以直接绑定一个对象。也可以绑定一个数组，会自动合并数组里的样式
            :style="[style1,style2]"
            style1:{
                color:red
            }
            style2:{
                font-size:0.75rem
            }
            两组样式将合并为一组
        </pre>
    </div>
</template>
<script>
export default {
    name:'dataBinding',
    data() {
        return {
            isActive:false,
            html:'<span>123</span>',
            aaa:'v-bind <=> :',
            myArry:[1,2,3,4],
            style1:{
                color:'red'
            },
            style2:{
                'font-size':'12px'
            }
        }
    },
    computed: {
        classNames(){
            // 在这里return一个完整的
        }
    },// 数据有变化时候才会重新计算
    methods: {
        handleClick(){
            alert('click')
        },
        getJoinArr(arr){
            return arr.join(' - ')
        }// 每次调用都会重新计算
    },
}
</script>

