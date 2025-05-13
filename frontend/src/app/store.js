import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "../features/Product/Product";
import basketReducer from "../features/Basket/Basket";

const rootReducer = combineReducers({
    basket: basketReducer,
  products: productReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
