import { configureStore } from "@reduxjs/toolkit";
import counter from "@/feature/counterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";

const persistConfig: PersistConfig<any> = {
  key: "splitApp",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, counter);

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
