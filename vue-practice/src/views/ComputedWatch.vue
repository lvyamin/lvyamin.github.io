<template>
    <div>
        vue 中的computed && watch
        <p>
            {{fristName}} && {{lastName}}
        </p>
        <p>
            {{name}}
        </p>
        <p>
            {{getName()}}
        </p>
        <p>
           Number: {{number}}
        </p>
        <p>
            FullName: {{fullName}}
        </p>
        <p>
            Number: <input type="text" v-model="number"/>
        </p>
        <p>
            fristName: <input type="text" v-model="fristName"/>
        </p>
        <p>
            lastName: <input type="text" v-model="lastName"/>
        </p>
        <p>
            newName: <input type="text" v-model="newName"/>
        </p>
        <p>
            obj.a:<input type="text" v-model="obj.a"/>
        </p>
        <pre>
            ---------------- 知识点 ----------------
            computed的性能开销比较小，可以缓存数据，最好不要做任何值的修改
            也就是说 可以用get，最好少用set
            
        </pre>

        <router-view/>
    </div>
</template>
<script>
import { log } from 'util'
export default {
    name:'ComputedWatch',
    data() {
        return {
            fristName:'lym',
            lastName:'lxc',
            number:0,
            fullName:'',
            obj:{
                a:'123'
            }
        }
    },
    computed: {
        name () {
            console.log('new name')
            return `${this.fristName} -- ${this.lastName}`
        },
        // 可以做为设置来用
        newName:{
            get(){
                console.log('get new name')
                return `${this.fristName} get ${this.lastName}`
            },
            set(name){
                console.log('set new name:',name)
                const names = name.split('get')
                this.firstName = names[0]
                this.lastName = names[1]
            }// 不到万不得已不要用set
        }
    },
    mounted() {
        this.obj={
            a:'345'
        }
    },
    methods: {
        getName(){
            console.log('new name ...')
            return `${this.fristName} ** ${this.lastName}`
        }
    },
    watch:{
        // 以下是监听的两种方式
        fristName(newName,oldName){
            this.fullName = newName+this.lastName
        },
        lastName:{
            // 监听lastName的变化，默认执行handler
            handler(newName,oldName){
                this.fullName = newName+this.fristName
            },
            immediate:true, //设置之后绑定的值才会显示，否则值只有变化的时候才会显示
        },
        obj:{
            // 监听lastName的变化，默认执行handler
            handler(newName,oldName){
                console.log('obj.a changed')
            },
            immediate:true, //设置之后绑定的值才会显示，否则值只有变化的时候才会显示
            deep:true // 深入观察，加入这个就可以深度监听数据的变化，一层一层的监听，性能开销比较大
        },
        // 如果不想用 deep 则可以选择用另一种写法
        'obj.a':{
            // 监听lastName的变化，默认执行handler
            handler(newName,oldName){
                console.log('obj.a changed~~~')
            },
            immediate:true, //设置之后绑定的值才会显示，否则值只有变化的时候才会显示
           // deep:true // 深入观察，加入这个就可以深度监听数据的变化，一层一层的监听，性能开销比较大
        },


    }
}
</script>
