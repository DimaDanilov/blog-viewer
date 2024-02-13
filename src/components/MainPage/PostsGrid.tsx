import styled from "styled-components";
import { Post } from "./Post";

export const PostsGrid = () => {
  return (
    <GridContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  > * {
    &:first-child {
      grid-column: 1 / -1; // First element should take full row
    }
  }
`;
