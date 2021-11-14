import { combineReducers } from "redux";
import authReducer from './auth/auth.reducer.js'
import currentPageReducer from "./currentpage/currentPage.reducer.js";
import dishReducer from "./dishes/dishes.reducer.js";
import { dishSectionReducer } from "./Home/home.reducer.js";
import { OrderReducer } from "./Order/order.reducer.js";
import restaurantReducer from "./restaurant/restaurant.reducer.js";
export const rootReducer=combineReducers({
    auth:authReducer,
    page:currentPageReducer,
    dish:dishSectionReducer,
    order:OrderReducer,
    category:dishReducer,
    restaurants:restaurantReducer
})