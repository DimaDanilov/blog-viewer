import styled from "styled-components";
import { PostModel } from "types/Post";
import { Title } from "ui/Title";
import { Paragraph } from "ui/Paragraph";
import { choosePostImage } from "utils/choosePostImage";
import { ReactionsBlock } from "components/common/ReactionsBlock";

type PostProps = { post: PostModel; isFirst: boolean };
type InteractivityContainerProps = {
  $isFirst: PostProps["isFirst"];
};

export const Post = ({ post, isFirst }: PostProps) => {
  return (
    <PostContainer>
      <a href={`post/${post.id}`}>
        <PostImage src={choosePostImage(post.id)} alt="" />
      </a>
      <PostInfo>
        <TitleContainer>
          <Title fontSize={28}>{post.title}</Title>
          {isFirst && <ReactionsBlock />}
        </TitleContainer>
        {isFirst && <Paragraph>{post.body}</Paragraph>}
      </PostInfo>
      <InteractivityContainer $isFirst={isFirst}>
        {!isFirst && <ReactionsBlock />}
        <PostLink href={`post/${post.id}`}>Читать далее</PostLink>
      </InteractivityContainer>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
`;

const PostImage = styled.img`
  width: 100%;
`;

const PostInfo = styled.div`
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InteractivityContainer = styled.div<InteractivityContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (!props.$isFirst ? "space-between" : "end")};
  align-items: center;
  margin: 20px;
  margin-top: auto; // Make this block attach to bottom
`;

const PostLink = styled.a`
  color: black;
  border: 2px solid black;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 60px;
  height: fit-content;
`;
