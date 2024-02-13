import styled from "styled-components";

type TitleProps = {
  children: string;
  fontSize?: number;
  textAlign?: "start" | "end" | "center";
};

// Pick property fontSize of TitleProps and rename it with $ for styled components usability
interface StyledTitleProps extends Pick<TitleProps, "fontSize" | "textAlign"> {
  $fontSize?: TitleProps["fontSize"];
  $textAlign?: TitleProps["textAlign"];
}

export const Title = ({ children, fontSize, textAlign }: TitleProps) => {
  return (
    <StyledTitle $textAlign={textAlign} $fontSize={fontSize || 34}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1<StyledTitleProps>`
  font-size: ${(props) => props.$fontSize}px;
  text-align: ${(props) => props.$textAlign};
  margin: 5px 0;
  &:first-letter {
    text-transform: uppercase;
  }
`;
