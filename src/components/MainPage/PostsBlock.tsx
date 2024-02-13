import styled from "styled-components";
import { Post } from "./Post";
import { PostsSearch } from "./PostsSearch";
import { useEffect, useState } from "react";
import { loadPosts } from "api/PostsApi";
import { PostModel } from "types/Post";

export const PostsBlock = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await loadPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <PostBlockContainer>
      <PostsSearch />
      <GridContainer>
        {posts.map((post: PostModel) => (
          <Post key={post.id} post={post} isFirst={post.id === 1} />
        ))}
      </GridContainer>
    </PostBlockContainer>
  );
};

const PostBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  > * {
    &:first-child {
      grid-column: 1 / -1; // First element should take full row
    }
  }
`;
