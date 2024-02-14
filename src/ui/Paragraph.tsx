import styled from "styled-components";

type ParagraphProps = {
  children: number | string;
  fontSize?: number;
  textAlign?: "start" | "end" | "center";
};

// Pick property fontSize of ParagraphProps and rename it with $ for styled components usability
interface StyledParagraphProps
  extends Pick<ParagraphProps, "fontSize" | "textAlign"> {
  $fontSize?: ParagraphProps["fontSize"];
  $textAlign?: ParagraphProps["textAlign"];
}

export const Paragraph = ({
  children,
  fontSize,
  textAlign,
}: ParagraphProps) => {
  return (
    <StyledParagraph $fontSize={fontSize || 20} $textAlign={textAlign}>
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-size: ${(props) => props.$fontSize}px;
  text-align: ${(props) => props.$textAlign};
  margin: 5px auto;
  &:first-letter {
    text-transform: uppercase;
  }
`;
