export const removeItem = (id,teamIndex) => {
    return {
        type : 'REMOVE_ITEM',
        payload:{
            id,
            teamIndex
        }
    }
}

export const addItem = (teamIndex,itemContent) => {
    return {
        type : 'ADD_ITEM',
        payload:{
            teamIndex,
            itemContent
        }
    }
}