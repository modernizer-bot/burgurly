import { all,call } from "@redux-saga/core/effects";
import { currentPage } from "./currentpage/currentPage.saga.js";
import {DishSection} from './Home/home.saga.js'
function* rootSaga(){
    yield all([call(currentPage), call(DishSection)])
}
export default rootSaga;