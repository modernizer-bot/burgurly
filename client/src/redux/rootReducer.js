import { combineReducers } from "redux";
import authReducer from './auth/auth.reducer'
import currentPageReducer from "./currentpage/currentPage.reducer";
import { dishSectionReducer } from "./Home/home.reducer";
import { OrderReducer } from "./Order/order.reducer";
export const rootReducer=combineReducers({
    auth:authReducer,
    page:currentPageReducer,
    dish:dishSectionReducer,
    order:OrderReducer
})