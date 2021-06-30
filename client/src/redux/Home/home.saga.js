import { takeEvery,put} from "redux-saga/effects";
import {fetchDish} from './home.actions'
import axios from 'axios'

function* FetchDish(action){
    yield console.log(action.payload);
    const response=yield axios.get('https://api.spoonacular.com/recipes/complexSearch',{
        params:{
            type:action.payload,
            number:25,
            apiKey:"5c2f750887994ff6949f5473bc20890e"
        }
    }) 
    yield put(fetchDish(response.data.results));
    yield console.log(response);
}

export function* DishSection(){
    yield takeEvery("SET_DISH_SECTION",FetchDish)
}
