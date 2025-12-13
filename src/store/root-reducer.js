import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

//This file will combine all our reducers

export const rootReducer = combineReducers ({
    user: userReducer,
    categories: categoriesReducer,
})