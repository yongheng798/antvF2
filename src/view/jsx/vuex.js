export default(state = defaultStatus,action)=>{
    let newState = JSON.parse(JSON.stringify(state))

    switch(action.type){
        // 删除
        case DELETE_TODO_ITEM:
            newState.list.splice(action.value,1)
            break
        // 添加
        case ADD_TOTO_ITEM:
            if(newState.inputValue.trim().length){
                newState.list.push(newState.inputValue)
            }
            newState.inputValue = ''
            break
        case INIT_LIST_ACTION:
            newState = action.data
            break
        default: 
            break
    }
    return newState
}