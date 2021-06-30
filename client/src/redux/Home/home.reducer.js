const initialState={
    dishsection:"main course",
    dish:[]
}
export const dishSectionReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_DISH_SECTION":
            return {
                ...state,
                dishsection:action.payload
            }
        case "FETCH_DISH":
            return {
                ...state,
                dish:action.payload
            }
        default:
            return state
    }
}