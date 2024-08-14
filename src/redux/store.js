import { persistStore, persistReducer, REGISTER, REHYDRATE, FLUSH, PURGE, PAUSE, PERSIST } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice'

const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
  
  export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);