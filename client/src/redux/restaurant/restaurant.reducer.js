const initialState={
  restur:[]
}

const restaurantReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'GET_RESTAURANTS':
          return {restur: action.payload}
      default:
          return state
  }
}
export default restaurantReducer