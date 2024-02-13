import { PageLayout } from "layouts/PageLayout";
import { useParams } from "react-router-dom";

export const PostPage = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <h1>Post Page {id}</h1>
    </PageLayout>
  );
};
