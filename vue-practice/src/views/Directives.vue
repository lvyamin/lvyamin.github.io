<template>
    <div>
        <h1 class="title">
            Vue 内置指令
        </h1>
        <p>各种指令示例</p>
        <p :id="id"></p>
        <p>{{text}}</p>
        <p v-text="text"></p>
        <p v-html="html"></p>
        <p>以下是v-for遍历的结果：</p>
        <ul>
            <li v-for="item in arr" :key="item">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in arr" :key="index">{{index}}-{{item}}</li>
        </ul>
        <ul>
            <li v-for="(val,key,index) in obj" :key="key">{{key}}:{{val}}:{{index}}</li>
        </ul>
        <p>vue 指令在表单元素的运用如下：</p>
        <p>
            <input type="text" v-model="text">
        </p>
        <p>
            <input type="checkbox" v-model="active">{{active}}
        </p>
        <p>
            <input type="checkbox" :value="1" v-model="arr">
            <input type="checkbox" :value="2" v-model="arr"> 
            <input type="checkbox" :value="3" v-model="arr"> 
            {{arr}}
        </p>
        <p>
            <input type="radio" value="one" v-model="picked">
            <input type="radio" value="two" v-model="picked">
            {{picked}}
        </p>
<pre>
------------------------------ 知识点总结 ------------------------------
01). vue 中的所有内置指令都是以v-做为前缀的
02). v-bind:id="" 的简写 :id=""
03). v-text="text" 也就等价于 双花括号的插值表达式,绑定字符串数据
04). v-html="html" 也就等价于 三花括号的插值表达式,绑定HTML片段
05). v-show="false" 控制显示隐藏，只是样式上的隐藏，等同于 display:none
06). v-if="false" 控制加载和移除节点
07). v-else 与v-if 一同使用，单独使用会报错
08). v-else-if="" 与v-if 一同使用，单独使用会报错
09). v-for="" 遍历数组时候用的,注意需要绑定:key="",否则会有报错或者警告，希望这是唯一指定的一个值，可以在缓存中拿到同样的key 来降低渲染时候的性能消耗
     最好不要用index做为key去缓存
10). v-on:click="" 的简写 @click="" 用于事件的绑定
11). v-model="" 一帮用于input组件作为数据的双向绑定
     v-model有修饰符 
        v-model.number 转换为数字类型; 
        v-model.lazy 把input转换为change; 
        v-model.trim去掉首尾的空格
12). v-pre 阻止页面中的插值表达式解析
13). v-cloak 在插值表达式中的数据没有加载成功之前，给一个display:none,不至于在加载未完成时看到插值表达式
14). v-once 数据绑定一次后，再有变化就不再重新渲染了，用于一些静态数据，在性能消耗上做一些节省

</pre>
    </div>
</template>
<script>
export default {
    name:'Directives',
    data() {
        return {
            id:0,
            text:'lym',
            active:false,
            html:'<span>这里是html片段</span>',
            arr:[1,2,3],
            obj:{
                a:'lym',
                b:'lyj',
                c:'lxcc'
            },
            picked:''

        }
    },
}
</script>
