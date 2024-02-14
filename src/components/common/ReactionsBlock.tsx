import styled from "styled-components";
import { Paragraph } from "ui/Paragraph";
import { PostModel } from "types/Post";
import { LikeIcon } from "assets/icons/LikeIcon";
import { DislikeIcon } from "assets/icons/DislikeIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { dislikePost, likePost } from "store/reducers/postReducer";
import { memo } from "react";

type ReactionBlockProps = Pick<PostModel, "id" | "likes" | "dislikes">;

export const ReactionsBlock = memo(
  ({ id, likes, dislikes }: ReactionBlockProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLikeClick = () => {
      dispatch(likePost(id));
    };

    const handleDislikeClick = () => {
      dispatch(dislikePost(id));
    };

    return (
      <ReactionsContainer>
        <Reaction onClick={handleLikeClick}>
          <LikeIcon color={likes.userLike ? "green" : "#959298"} />
          <Paragraph>{likes.amount}</Paragraph>
        </Reaction>
        <Reaction onClick={handleDislikeClick}>
          <DislikeIcon color={dislikes.userDislike ? "red" : "#959298"} />
          <Paragraph>{dislikes.amount}</Paragraph>
        </Reaction>
      </ReactionsContainer>
    );
  }
);

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
  cursor: pointer;
`;
