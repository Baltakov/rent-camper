import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './slices';
import persistStore from 'redux-persist/es/persistStore';

const store = configureStore({
  reducer: {
    advert: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
