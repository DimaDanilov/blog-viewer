import { PostModel } from "types/Post";
import { axiosBase } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk("post/loadPosts", async () => {
  const response = await axiosBase.get<PostModel[]>(`posts`);
  return response.data;
});
