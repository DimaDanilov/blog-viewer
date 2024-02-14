import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { loadPosts, loadPostById, findPostsByQuery } from "api/PostApi";
import { PostModel } from "types/Post";
import { IRootState } from "./rootReducer";

interface PostState {
  posts: PostModel[];
  filteredIds: number[];
}

const initialState: PostState = {
  posts: [],
  filteredIds: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadPosts.fulfilled,
      (state, action: PayloadAction<PostModel[]>) => {
        // Filter new posts so they won't have dublicates from old state
        const uniquePosts = action.payload.filter((newPost) =>
          state.posts.every((existingPost) => existingPost.id !== newPost.id)
        );
        state.posts = [...state.posts, ...uniquePosts];
      }
    );
    builder.addCase(
      findPostsByQuery.fulfilled,
      (state, action: PayloadAction<PostModel[]>) => {
        state.filteredIds = action.payload.map((post) => post.id);
      }
    );
    builder.addCase(
      loadPostById.fulfilled,
      (state, action: PayloadAction<PostModel>) => {
        // If post doesn't exist then add him to store
        const isPostExists = state.posts.some(
          (post) => post.id === action.payload.id
        );
        if (!isPostExists) {
          state.posts.push(action.payload);
        }
      }
    );
  },
});

export const selectPostById = (id: number) =>
  createSelector(
    (state: IRootState) => state.post.posts,
    (posts) => posts && posts.find((post: PostModel) => post.id === id)
  );

export const selectFilteredPosts = () =>
  createSelector(
    (state: IRootState) => state.post.posts,
    (state: IRootState) => state.post.filteredIds,
    (posts, filteredIds) => {
      return posts.filter((post) => filteredIds.includes(post.id));
    }
  );

export default postSlice.reducer;
