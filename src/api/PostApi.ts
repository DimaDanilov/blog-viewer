import { PostApiModel } from "types/Post";
import { axiosBase } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostAdapter } from "./PostAdapter";

export const loadPosts = createAsyncThunk("post/loadPosts", async () => {
  const response = await axiosBase.get<PostApiModel[]>(`posts`);
  return PostAdapter.transformArray(response.data);
});

export const findPostsByQuery = createAsyncThunk(
  "post/findPostsByQuery",
  async (search: string) => {
    const response = await axiosBase.get<PostApiModel[]>(`posts`, {
      params: {
        title: search.toLowerCase() || undefined,
      },
    });
    return PostAdapter.transformArray(response.data);
  }
);

export const loadPostById = createAsyncThunk(
  "post/loadPostById",
  async (id: string) => {
    const response = await axiosBase.get<PostApiModel>(`posts/${id}`);
    return PostAdapter.transform(response.data);
  }
);
