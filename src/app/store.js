import { configureStore } from '@reduxjs/toolkit';
import nameReducer from '../features/name/nameSlice';

export const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});
