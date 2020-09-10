<template>
    <div>
        <h1 @click="handleClick()">{{title}}</h1>
        <p>
            <span v-show="active">show active:</span>
            <input type="text" v-model="title">
            {{propOne}}
        </p>
    </div>
</template>
<script>
import { log } from 'util'
export default {
    name:"ComponentOne",
    data() {
        return {
            title:'第一个组件'
        }
    },
    props:{
        active:Boolean,
        propOne:Number,
        newActive:{
            type:Boolean,
            // required:false,
            default:false // 这里有default就不需要required 
        },
        newpropOne:{
            type:Object,
            // required:false,
            default(){ //如果是一个对象，那么也要默认是个方法 这个同data的使用方式是一样的
                return {

                }
            }
        },
        newpropTwo:{
            // type:Object,
            // required:false,
            validator(value){ //如果需要更加严格的去校验数据 
                return typeof value == Object
            }
        }
    },
    methods: {
      handleClick(){
         this.propOne+='lym'
      }
    },
}
</script>
<style lang="less" scoped>
    p{
        font-size: 0.75rem;
    }
    h1{
        font-size: 0.875rem;
        line-height: 1.875rem;
        font-weight:normal;
        cursor: pointer;
    }
    pre{
        line-height: 1.5625rem;
    }
    ul,li{
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        line-height: 1.375rem;
    }
    ul{
        margin: 10px 0;
        li{
            background:paleturquoise;
            border-radius: 0.1875rem;
            margin-bottom: 1px;
            padding: 0 0.625rem;
            color: royalblue;
            opacity: 0.8;
        }
    }
</style>