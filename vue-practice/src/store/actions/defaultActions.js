export default {
    UpdateCountSync(stroe,data){
        setTimeout(()=>{
            stroe.commit('UpdateCount',{
                num:data.num
            })
        },data.time)
    }
}