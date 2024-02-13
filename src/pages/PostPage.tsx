import { ReactionsBlock } from "components/common/ReactionsBlock";
import { PageLayout } from "layouts/PageLayout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Paragraph } from "ui/Paragraph";
import { Title } from "ui/Title";
import { choosePostImage } from "utils/choosePostImage";
import arrow_left_icon from "assets/icons/arrow_left_icon.svg";

export const PostPage = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <NavigationContainer>
        <LinkWithImage href="/">
          <img src={arrow_left_icon} alt="<-" width={30} />
          Вернуться к статьям
        </LinkWithImage>
        <ReactionsBlock />
      </NavigationContainer>
      <PostContainer>
        <Title>Что нужно знать об эффективной интернет-рекламе?</Title>
        <PostInfo>
          {id && <PostImage src={choosePostImage(Number(id))} alt="" />}
          <Paragraph>
            Интернет - огромный ресурс, позволяющий продвигать свои услуги
            практически на любую аудиторию. Ежедневно в сеть выходит более 5
            миллиардов людей - каждый из них может увидеть вашу рекламу и стать
            вашим потенциальным клиентом. Даже небольшого процента этой
            аудитории будет достаточно для эффективного продвижения ваших услуг.
            Это огромное преимущество интернета перед другими каналами
            коммуникации. И в этом же заключается его главный недостаток -
            переизбыток информации и высокая конкуренция.
          </Paragraph>
        </PostInfo>
      </PostContainer>
    </PageLayout>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkWithImage = styled.a`
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
