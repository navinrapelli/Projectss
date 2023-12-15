import { configureStore } from "@reduxjs/toolkit";
import placeReducer from './SliceFav'
import logger from 'redux-logger'
export const StoreFav=configureStore({
    reducer:{
    storeState:placeReducer,
    
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(logger),
});


