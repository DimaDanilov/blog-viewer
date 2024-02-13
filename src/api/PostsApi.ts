import { PostModel } from "types/Post";
import { axiosBase } from ".";

export async function loadPosts(): Promise<PostModel[]> {
  const response = await axiosBase.get<PostModel[]>(`posts`);
  return response.data;
}
