import axios from 'axios'
export const getRestaurants=()=>{
    return async (dispatch)=>{
        const {data}=await axios.get('/api/partner/restaurants');
        dispatch({type:'GET_RESTAURANTS',payload:data})
    }
}

export const getMenu=(prop)=>{
    const {restaurantId, menuName}=prop;
    return async (dispatch)=>{
        const {data}=await axios.post('/api/partner/restaurants/menu',{
            restaurantId,menuName
        });
        dispatch({type:'GET_MENU',payload:data})
    }
}