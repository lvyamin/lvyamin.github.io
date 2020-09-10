<template>
    <div>
        <span class="content">{{content}}</span>
        <a class="btn">{{btn}}</a>
    </div>
</template>
<script>
export default {
    name:'Notification',
    props:{
        content:{
            type:String,
            default:'',
            required:true
        },
        btn:{
            type:String,
            default:'关闭'
        }
    }
}
</script>