<script>
import ComponentForRender from '@/components/ComponentFourRender.vue'
export default {
    name:'CompRender',
    components:{
        ComponentForRender:ComponentForRender
    },
    // render(){
    //     return this.$createElement(
    //        ......
    //     )
    // }
    //等价于
    data() {
        return {
            value:'thisVal',
            text:':::::testVAL'
        }
    },
    methods: {
        handleClick(){
            alert('handleClick')
        }
    },
    render(createElement){
        return createElement(
            'div',{
                class:'AAA'
            },
            [//创建子节点需要用数组
                createElement(
                    'component-for-render',
                    {
                        ref:'compRender',//属性的绑定都可以在其中
                        // props:{
                        //     prop1:this.text
                        // },
                        
                    },
                    [
                        createElement(
                            'span',
                            {
                                ref:'compRef',
                                domProps:{
                                    innerHTML:"<b>hhhhhh</b>"
                                },
                                attrs:{
                                    id:'test-id',
                                    class:'test-class'
                                }
                            },
                            this.value // 上面的domProps覆盖了this.value
                        )
                    ]
                ),
                createElement(
                    'span',{
                        on:{//用于绑定事件
                            click:this.handleClick
                        },
                        // nativeOn:{// 直接将事件绑定到根节点，不需要emit去分发
                        //     click:this.handleClick
                        // }
                    },[this.value,this.text]// 绑定其中的值
                )
            ]

        )
    }
}
</script>