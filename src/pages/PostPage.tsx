import { ReactionsBlock } from "components/common/ReactionsBlock";
import { PageLayout } from "layouts/PageLayout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "ui/Paragraph";
import { Title } from "ui/Title";
import { choosePostImage } from "utils/choosePostImage";
import arrow_left_icon from "assets/icons/arrow_left_icon.svg";
import { selectPostById } from "store/reducers/postReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch } from "store/store";
import { loadPostById } from "api/PostApi";

export const PostPage = () => {
  const { id } = useParams();
  const post = useSelector(selectPostById(Number(id)));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!post && id) {
      dispatch(loadPostById(id));
    }
  }, []);

  return (
    <PageLayout>
      <NavigationContainer>
        <LinkWithImage to="/">
          <img src={arrow_left_icon} alt="<-" width={30} />
          Вернуться к статьям
        </LinkWithImage>
        {post && <ReactionsBlock likes={post.likes} dislikes={post.dislikes} />}
      </NavigationContainer>
      {post && (
        <PostContainer>
          <Title>{post.title}</Title>
          <PostInfo>
            <PostImage src={choosePostImage(Number(id))} alt="" />
            <Paragraph>{post.body}</Paragraph>
          </PostInfo>
        </PostContainer>
      )}
    </PageLayout>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkWithImage = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  font-size: 24px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const PostInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const PostImage = styled.img`
  width: 100%;
`;
