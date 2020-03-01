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
     position: absolute;
     top: 17px;
     left: 5px;
     grid-row: 1/2;
     grid-column: 2/3;
     z-index: 3;
     width: 3.8em;
     padding: 10px;
     margin: auto 50px 2px 0;
     color: ${theme.e};
     background-color: ${theme.d};
     border: solid 3px ${theme.b};
     border-radius: 30px;
     box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
     &:active {
       position: absolute;
       top: 21px;
     }
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

   ${props =>
     props.menuExpand &&
     css`
       position: absolute;
       bottom: -2em;
       max-height: 2em;
       padding: 2px 25px 2px;
       margin: 0;
       z-index: 10;
       align-self: end;
       background-color: ${theme.b};
       border: solid 2px ${theme.e};
       ${"" /* box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),
         3px 3px 6px rgba(0, 0, 0, 0.3); */}
       animation: 0.5s ease-out 0.5s 3 initialWiggle;
       @keyframes initialWiggle {
         0% {
           bottom: -2em;
         }
         50% {
           bottom: -2.2em;
         }
         100% {
           bottom: -2em;
         }
       }
       transform: ${props => props.topicsExpanded && css` rotate(180deg)`};
       &:active {
         position: absolute;
         bottom: -2.2em;
         top: auto;
       }
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

  svg.clapGrowAnimation {
    animation: sampleanimation 0.2s forwards;
  }
  @keyframes sampleanimation {
    0% {
      width: 44px;
      height: 44px;
      padding: 7px;
    }

    60% {
      transform: scale(0.8);
    }

    85% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
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
  -webkit-clip-path: polygon(0 0, 35px 0, 35px 100%, 0 100%);

  clip-path: polygon(0 0, 35px 0, 35px 100%, 0 100%);
`;

export const CommentCardStripe = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${theme.a};
  -webkit-clip-path: polygon(0 0, 35px 0, 35px 100%, 0 100%);
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
