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

  ${props =>
    props.leftArrow &&
    css`
      padding: 10px 10px 10px 10px;
      margin: 50px 0;
      transform: rotate(90deg);
    `}
  ${props =>
    props.rightArrow &&
    css`
      padding: 10px 10px 10px 10px;
      margin: 50px 0;
      transform: rotate(-90deg);
    `}
 ${props =>
   props.wink &&
   css`
     grid-row: 1/2;
     grid-column: 2/3;
     z-index: 3;
     width: min-content;
     padding: 10px;
     margin: auto 50px 2px 0;
     color: ${theme.e};
     background-color: ${theme.d};
     border: solid 3px ${theme.b};
     border-radius: 30px;
     box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
   `}
 ${props =>
   props.eyeroll &&
   css`
     grid-row: 2/3;
     grid-column: 3/4;
     z-index: 3;
     color: ${theme.e};
     background-color: ${theme.b};
     border: solid 3px ${theme.e};
     box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),
       1px 1px 3px rgba(0, 0, 0, 0.3);
   `}
 ${props =>
   props.deleteComment &&
   css`
     grid-area: deleteButton;
     background-color: ${theme.a};
     padding: 3px 0 0 0;
     margin: 0 0 0 auto;
     width: 40px;
     height: 40px;
     border: solid 2px ${theme.e};
     border-radius: 2px;
     box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3),
       1px 1px 2px rgba(0, 0, 0, 0.3);
   `}
`;

export const StyledVoteElement = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1.5em 4em;
  grid-template-columns: 1fr;

  ${props =>
    props.articleCard &&
    css`
      font-size: 16px;
      grid-area: engagementSummary;
    `}

  div {
    position: relative;
    grid-row: 2/3;
    grid-column: 1/2;

    justify-self: center;
    border-radius: 50px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 200px auto;
  }
  svg {
    grid-row: 1/2;
    grid-column: 2/3;
    background-color: ${theme.d};
    border-radius: 50%;
    padding: 7px;
    margin-right: 7px;
    border: solid 2px ${theme.b};
    justify-self: center;
    align-self: center;
    fill: ${theme.e};
    z-index: 5;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  h6 {
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: ${theme.b};
    width: min-content;
    padding: 4px 13px 30px 13px;
    font-size: 16px;
    border-radius: 50px;
    margin: 0 auto;
    color: ${theme.e};
    text-align: center;
    align-self: start;
    text-shadow: 1px 1px ${theme.c};
  }
`;

export const ArticleCardStripe = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.e};
  clip-path: polygon(0 0, 35px 0, 35px 100%, 0 100%);
`;

export const CommentCardStripe = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.a};
  clip-path: polygon(0 0, 35px 0, 35px 100%, 0 100%);
`;

export const VoteElementBackgroundStripe = styled.aside`
  position: absolute;
  background-color: ${theme.b};
  top: 17px;
  left: 5px;
  width: 110px;
  height: 45px;
  border-radius: 50px;
  grid-row: 1/2;
  grid-column: 2/3;
  z-index: 0;
  margin: auto 0;
`;
