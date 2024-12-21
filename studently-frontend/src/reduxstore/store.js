import { configureStore } from '@reduxjs/toolkit';
import allPostsReducer from './slices/allPostsSlice.js';

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
  },
});
