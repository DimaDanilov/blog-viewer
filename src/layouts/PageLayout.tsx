import styled from "styled-components";
import { ChildrenProps } from "types/ChildrenProps";

export function PageLayout({ children }: ChildrenProps) {
  return (
    <PageContainer className="flex flex-col gap-6 w-11/12 mx-auto py-20">
      {children}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 85%;
  margin: 0 auto;
  padding: 40px 0 80px;
`;
