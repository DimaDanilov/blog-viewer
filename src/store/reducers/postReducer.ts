import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loadPosts } from "api/PostsApi";
import { PostModel } from "types/Post";

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
        state.posts = action.payload;
      }
    );
  },
});

export default postSlice.reducer;
