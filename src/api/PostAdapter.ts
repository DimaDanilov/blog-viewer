import { PostApiModel, PostModel } from "types/Post";
import { randomizeReactions } from "utils/randomizeReactions";

export class PostAdapter {
  static transform(post: PostApiModel): PostModel {
    return {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
      likes: {
        amount: randomizeReactions(),
        userLike: false,
      },
      dislikes: {
        amount: randomizeReactions(),
        userDislike: false,
      },
    };
  }
  static transformArray(posts: PostApiModel[]): PostModel[] {
    return posts.map((post: PostApiModel) => this.transform(post));
  }
}
