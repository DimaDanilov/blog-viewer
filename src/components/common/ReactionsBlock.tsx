import styled from "styled-components";
import { Paragraph } from "ui/Paragraph";
import { PostModel } from "types/Post";
import { LikeIcon } from "assets/icons/LikeIcon";
import { DislikeIcon } from "assets/icons/DislikeIcon";

type ReactionBlockProps = Pick<PostModel, "likes" | "dislikes">;

export const ReactionsBlock = ({ likes, dislikes }: ReactionBlockProps) => {
  return (
    <ReactionsContainer>
      <Reaction>
        <LikeIcon color={likes.userLike ? "green" : "#959298"} />
        <Paragraph>{likes.amount}</Paragraph>
      </Reaction>
      <Reaction>
        <DislikeIcon color={likes.userLike ? "red" : "#959298"} />
        <Paragraph>{dislikes.amount}</Paragraph>
      </Reaction>
    </ReactionsContainer>
  );
};

const ReactionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const Reaction = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;
