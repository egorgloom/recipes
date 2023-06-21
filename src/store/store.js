import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer } from './../favorites/favorites.slice';
import { userSlice } from "./user/user.slice";



const rootReducers = combineReducers ({
    favorites: favoritesReducer,
    user: userSlice.reducer,
}
)

export const store = configureStore({
    reducer: rootReducers,
})