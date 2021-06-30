export const setdishsection=(dishsection)=>{
    return{
        type:"SET_DISH_SECTION",
        payload:dishsection
    }
}

export const fetchDish=(dish)=>{
    return{
        type:"FETCH_DISH",
        payload:dish
    }
}