import { takeEvery,put} from "redux-saga/effects";
import {setDish,SetSuggestions} from './home.actions'
import axios from 'axios'

function* SetDish(action){
    const response=yield axios.get('https://api.spoonacular.com/recipes/complexSearch',{
        params:{
            type:action.payload,
            number:10,
            apiKey:"27fe581e9b774f2e98611228bf664457"
            // apiKey:"5c2f750887994ff6949f5473bc20890e"
        }
    }) 
    yield put(setDish(response.data.results));
}

export function* DishSection(){
    yield takeEvery("SET_DISH_SECTION",SetDish)
}
/////////////////////////////////////////////////

function* QueryDish(action){
    const response=yield axios.get('https://api.spoonacular.com/recipes/autocomplete',{
        params:{
            query:action.payload,
            number:5,
            apiKey:"27fe581e9b774f2e98611228bf664457"
            // apiKey:"5c2f750887994ff6949f5473bc20890e"
        }
    });
    yield put(SetSuggestions(response.data)) 
}
export function* SearchDish(){
    yield takeEvery("SEARCH_FOOD",QueryDish)
}

////////////////////////////////////////////

function* FetchDish(action){
    yield put(SetSuggestions([]));
    const response=yield axios.get('https://api.spoonacular.com/recipes/complexSearch',{
        params:{
            query:action.payload,
            number:10,
            apiKey:"27fe581e9b774f2e98611228bf664457"
            // apiKey:"5c2f750887994ff6949f5473bc20890e"
        }
    }) 
    yield put(setDish(response.data.results));

}

export function* FetchDishSaga(){
    yield takeEvery("FETCH_DISH",FetchDish)
}