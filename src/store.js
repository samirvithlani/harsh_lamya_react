import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"
import bankReducer from "./redux/BankSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore, PURGE } from "redux-persist";


const rootReducer = combineReducers({
    cart:cartReducer,
    bank:bankReducer
})

const persistConfig ={
    key:"root",
    storage,
    whitelist:['bank']

}

export const store = configureStore({
    reducer:persistReducer(persistConfig,rootReducer),
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[PURGE]
            }
        })
    }
    
})

export const persistor = persistStore(store)
