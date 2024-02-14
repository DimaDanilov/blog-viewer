import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { loadPosts } from "api/PostsApi";
import { PostModel } from "types/Post";
import { IRootState } from "./rootReducer";

interface PostState {
  posts: PostModel[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadPosts.fulfilled,
      (state, action: PayloadAction<PostModel[]>) => {
        return {
          ...state,
          posts: action.payload,
        };
      }
    );
  },
});

export const selectPostById = (id: number) =>
  createSelector(
    (state: IRootState) => state.post.posts,
    (posts) => posts && posts.find((post: PostModel) => post.id === id)
  );

export default postSlice.reducer;
