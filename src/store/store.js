import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer } from './../favorites/favorites.slice';
import { userSlice } from "./user/user.slice";
import { api } from './api/api';




const rootReducers = combineReducers ({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
}
)

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
