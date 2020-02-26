import styled, { css } from "styled-components";
import theme from "./colourTheme";

export const PageTitle = styled.h1`
  text-align: center;
  grid-area: title;
  margin: 0;
  align-self: center;
`;

export const SubHeading = styled.h3`
  margin: 0;

  ${props =>
    props.header &&
    css`
      grid-area: welcome;
      align-self: start;
      text-align: end;
    `}
`;
