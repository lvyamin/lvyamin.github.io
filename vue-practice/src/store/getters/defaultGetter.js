export default{// 可以理解为computed
    fullName:(state)=>{
        return `${state.fristName}-${state.lastName}`
    }
}