import { all,call } from "@redux-saga/core/effects";
import { currentPage } from "./currentpage/currentPage.saga";
import {DishSection,SearchDish,FetchDishSaga} from './Home/home.saga'
function* rootSaga(){
    yield all([call(currentPage), call(DishSection), call(SearchDish), call(FetchDishSaga)])
}
export default rootSaga;