export default{
    UpdateCount:(state,{num,num2})=>{
        state.count=num
        console.log(num2)
      },
    UpdateVCount:(state,num)=>{
        state.vcount=num
      }

}