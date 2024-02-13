import styled from "styled-components";
import likeIcon from "assets/icons/like_icon.svg";
import dislikeIcon from "assets/icons/dislike_icon.svg";
import { Paragraph } from "ui/Paragraph";

export const ReactionsBlock = () => {
  return (
    <ReactionsContainer>
      <Reaction>
        <img src={likeIcon} alt="Like" />
        <Paragraph>10</Paragraph>
      </Reaction>
      <Reaction>
        <img src={dislikeIcon} alt="Dislike" />
        <Paragraph>15</Paragraph>
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
`;
