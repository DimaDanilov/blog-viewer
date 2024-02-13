import { PostsGrid } from "components/MainPage/PostsGrid";
import { PostsSearch } from "components/MainPage/PostsSearch";
import { PageLayout } from "layouts/PageLayout";
import { Paragraph } from "ui/Paragraph";
import { Title } from "ui/Title";

export const MainPage = () => {
  return (
    <PageLayout>
      <Title fontSize={60} textAlign="center">
        Блог
      </Title>
      <Paragraph fontSize={24}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </Paragraph>
      <PostsSearch />
      <PostsGrid />
    </PageLayout>
  );
};
