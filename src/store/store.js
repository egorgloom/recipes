import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "../favorites/favorites.slice";


const rootReducers = combineReducers({
    favorites: favoritesReducer,
})

export const store = configureStore({
    reducer: rootReducers
})