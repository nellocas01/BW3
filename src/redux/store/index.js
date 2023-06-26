import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../reducers/userReducer";
import experienceReducer from "../reducers/experienceReducer";
import profilesReducer from "../reducers/profilesReducer";
import selectedProfileReducer from "../reducers/selectedProfileReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
      secretToken: process.env.REACT_APP_STRIVE_TOKEN,
    }),
  ],
};

const rootReducer = combineReducers({
  main: MainReducer,
  user: userReducer, // forse questa proprietà dovrà cambiare il nome, renderla "parlante" => myProfile
  experience: experienceReducer,
  profiles: profilesReducer,
  selectedProfile: selectedProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
