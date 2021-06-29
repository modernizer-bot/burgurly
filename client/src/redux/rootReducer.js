import { combineReducers } from "redux";
import authReducer from './auth/auth.reducer'
import currentPageReducer from "./currentpage/currentPage.reducer";
export const rootReducer=combineReducers({
    auth:authReducer,
    page:currentPageReducer
})