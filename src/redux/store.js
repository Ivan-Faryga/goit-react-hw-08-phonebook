import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import rootReducer from "./contacts/contacts-reducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contactPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};
// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// const persistedContactReducer = persistReducer(
//   contactPersistConfig,
//   rootReducer
// );

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contactPersistConfig, rootReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: true,
});

const persistor = persistStore(store);
const obj = { store, persistor };
export default obj;

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     // contacts,
//     // filter,
//     // [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
//   devTools: true,
// });

// export const persistor = persistStore(store);
