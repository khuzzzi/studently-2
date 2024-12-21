// features/allPostsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [], // This will store all posts
};

const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, updatedPost } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...updatedPost };
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setPosts: (state, action) => {
      state.posts = action.payload; // Replaces all posts with new data
    },
  },
});

export const { addPost, updatePost, deletePost, setPosts } = allPostsSlice.actions;

export default allPostsSlice.reducer;
