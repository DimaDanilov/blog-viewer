import styled from "styled-components";
import { Post } from "./Post";
import { PostsSearch } from "./PostsSearch";
import { useEffect } from "react";
import { loadPosts } from "api/PostsApi";
import { PostModel } from "types/Post";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store/store";
import { IRootState } from "store/reducers/rootReducer";

export const PostsBlock = () => {
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector((state: IRootState) => state.post.posts);

  useEffect(() => {
    dispatch(loadPosts());
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
