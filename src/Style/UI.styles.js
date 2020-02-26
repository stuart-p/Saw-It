import styled, { css } from "styled-components";
import theme from "./colourTheme";

export const Button = styled.button`
  margin: 3px 0;
  background-color: ${theme.e};
  color: ${theme.d};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${theme.b};
    color: ${theme.e};
  }
  &:active {
    position: relative;
    top: 2px;
  }
`;
