import { combineReducers, configureStore } from '@reduxjs/toolkit'
import formReducer from "./formSlice"

export const reducers = combineReducers({
    form: formReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
