import styled from "styled-components";
import { Post } from "./Post";
import { PostsSearch } from "./PostsSearch";
import { useEffect } from "react";
import { loadPosts } from "api/PostApi";
import { PostModel } from "types/Post";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "store/store";
import { selectFilteredPosts } from "store/reducers/postReducer";

export const PostsBlock = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectFilteredPosts());

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, []);

  return (
    <PostBlockContainer>
      <PostsSearch />
      <GridContainer>
        {posts.map((post: PostModel, index) => (
          <Post key={post.id} post={post} isFirst={index === 0} />
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
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  gap: 20px;
  > * {
    &:first-child {
      grid-column: 1 / -1; // First element should take full row
    }
  }
`;
