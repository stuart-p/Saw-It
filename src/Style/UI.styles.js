import styled, { css } from "styled-components";
import theme from "./colourTheme";
import VoteElement from "../components/UI/VoteElement";

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

export const StyledVoteElement = styled.div`
  display: flex;
  flex-direction: row;

  ${props =>
    props.articleCard &&
    css`
      font-size: 14px;
      grid-area: engagementSummary;
    `}

  Button {
    padding: 0;
    height: 3.5em;
    width: 3.5em;
    border-radius: 50%;
    text-align: center;
    background-color: ${theme.d};
    border: solid 1px ${theme.e};
    color: ${theme.e};
  }
  div {
    position: relative;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    margin: 0 25px;
  }
  img {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  h6 {
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 0;
    font-size: 28px;
    margin: 0;
    color: ${theme.e};
    text-align: center;
    align-self: center;
    text-shadow: 2px 2px ${theme.d};
  }
`;

export const ArticleCardStripe = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.e};
  clip-path: polygon(0 0, 10% 0, 10% 100%, 0 100%);
`;
