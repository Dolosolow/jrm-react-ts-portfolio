import styled, { css } from "styled-components";

export interface styledProps {
  readonly $colored?: string;
  readonly $flexDirection?: string;
  readonly $margin?: string;
  readonly $maxWidth?: string;
  readonly $width?: string;
}

export const StyledContainer = styled.div<styledProps>`
  align-items: center;
  display: flex;
  height: max-content;
  justify-content: center;
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  max-width: 120rem;
  position: relative;
  width: 100%;
`;

export const LayoutLimiter = styled.div<styledProps>`
  ${({ $width, $flexDirection }) => {
    return css`
      flex-direction: ${$flexDirection ? $flexDirection : "row"};
      height: 100%;
      justify-content: "space-around";
      max-width: 120rem;
      width: ${$width ? $width : "100%"};

      @media only screen and (max-width: ${({ theme: { mediaPx } }) =>
          mediaPx.tabPort / 16}em) {
        flex-direction: column;
        justify-content: flex-end;
        width: 90%;
      }
    `;
  }}
`;

export const StyledText = styled.p<styledProps>`
  ${({ theme: { colors }, $colored, $margin, $maxWidth }) => {
    return css`
      color: ${$colored ? colors.primary : colors.smokedWhite};
      margin: ${$margin ? $margin : "0"};
      max-width: ${$maxWidth ? `${$maxWidth}px` : "none"};
    `;
  }}
`;
