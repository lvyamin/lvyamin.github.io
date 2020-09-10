<template>
    <div>
        <h1 class="title">Vuex</h1>
        <div>
            <p>1.关于配置方式：</p>
            <p>要做服务端渲染就不能用cli的默认静态配置---推荐方式是服务端渲染的方式来配置</p>
            <ul>
                <li>
                 count: {{count}}
                </li>
                <li>
                    fullName: {{fullName}}
                </li>
            </ul>
            <p>2.state可以分开多个模块文件进行管理</p>
            <p>3.mutations中如果要传多个参数，就将第二个参数包装成一个object</p>
            <p>如果要修改state中的值尽量都放在mutation里面去做</p>
            <p>4. actions一般处理异步的数据修改,在组件中通过dispatch去触发，道理等同为mutation需要commit去触发</p>
<pre>
同步的简单的数据操作可以写在mutation里
异步的复杂数据操作可以写在action里
5. vuex 是可以分模块的：

</pre>
<ul>
    <li>
        textA:{{textA}}
    </li>
    <li>
        
    </li>
    <li>
        textB:{{textB}}
    </li>
    <li>
        textPlus:{{textPlus}}
    </li>
</ul>
        </div>
<pre>
6. 动态注册模块如何实现？
</pre>
<div>
    <ul>
        <li>
            textNew:{{textNew}}
        </li>
    </ul>
</div>
<pre>
7.给vuex 添加热更新的功能，当vuex的数据有变化时，页面不会刷新才显示新的数据，这有利于提高开发效率
</pre>
<div>
    <ul>
        <li>
            vcount:::{{vcount}}
        </li>
    </ul>
</div>
<img src="../assets/vue-img.png" width="90%" alt="">
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'
export default {
    name:"VmStore",
    mounted() {
        console.log('----???this.$store:',this.$store)
        let i =1
        this.UpdateCount({
            num:i++,
            num2:3
        })
        setInterval(()=>{
            i*=4
            this.UpdateVCount(i)
        },1000)
        
        // setInterval(()=>{
        //     // this.$store.commit('UpdateCount',i++)
        //     this.$store.commit('UpdateCount',{
        //         num:i++,
        //         num2:3})
        // },1000)
        // this.$store.dispatch('UpdateCountSync',{
        //     num:5,
        //     time:3000
        // })
        this.UpdateCountSync({
            num:5,
            time:3000
        }),
        this.UpdateText('I am mutationsA'),
        this['modb/UpdateText']('I am mutationsB')
        this['modb/AddText']()
    },
    methods: {
        ...mapMutations(['UpdateCount','UpdateVCount','UpdateText','modb/UpdateText']),
        // 这里说明UpdateText可以在全局作用域下使用
        // 这里说明modb/UpdateText可以在局局作用域下使用，在自己的命名空间下才可以使用
        ...mapActions(['UpdateCountSync','modb/AddText'])
    },
    computed: {
        // textA(){
        //     return this.$store.state.moda.text
        // },
        // textB(){
        //     return this.$store.state.modb.text
        // },
        // 这样挨个的写会比较麻烦 所以VUE中提供了比较简洁的写法
        // count(){
        //     return this.$store.state.count
        // },
        // fullname(){
        //     return this.$store.getters.fullName
        // },
        // ...mapState(['count']), 
        // ...mapState({counter:'count'}),这是用别名的方式
        // 也可以写作
        // ...mapState({
        //     counter:(state)=>state.count 这样写的好处是还可以同时做些计算
        // })
        ...mapState({
            count:(state)=>state.count,
            vcount:(state)=>state.vcount,
            textA:(state)=>state.moda.text,
            textB:(state)=>state.modb.text,
            textNew:(state)=>state.newModule.text
        }),
        // ...mapGetters(['fullName','modb/GetText']) 可以这么写，但是难以被调用，可以在方法里调用this['modb/GetText']
        ...mapGetters({
            'fullName':'fullName',
            'textPlus':'modb/GetText'
        })
    },
    
}
</script>