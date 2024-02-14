export type PostModel = {
  userId: number;
  id: number;
  title: string;
  body: string;
  likes: {
    amount: number;
    userLike: boolean;
  };
  dislikes: {
    amount: number;
    userDislike: boolean;
  };
};

export type PostApiModel = Omit<PostModel, "likes" | "dislikes">;
