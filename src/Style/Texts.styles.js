import styled, { css } from "styled-components";
import theme from "./colourTheme";
import { Link } from "@reach/router";

export const PageTitle = styled.h1`
  text-align: center;
  grid-area: title;
  margin: 0;
  align-self: center;

  ${props =>
    props.headline &&
    css`
      text-align: start;
      padding: 20px 0 0 20px;
      font-size: calc(25px + 7vw);
      color: ${theme.e};
    `}
`;

export const CardHeading = styled.h2`
  margin: 0;

  ${props =>
    props.articleSummary &&
    css`
      grid-area: articleSummary;
    `}
  ${props =>
    props.topicSlug &&
    css`
      grid-area: topicSlug;
    `}
`;

export const StyledLink = styled(Link)`
  grid-area: articleSummary;
  color: black;
  text-decoration: none;
  width: 100%;
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

  ${props =>
    props.articleTopicName &&
    css`
      grid-area: topicName;
    `}

${props =>
  props.articlePostDetails &&
  css`
    font-size: 14px;
    grid-area: postDetails;
  `}
${props =>
  props.articleCommentCount &&
  css`
    grid-area: commentCount;
    text-align: right;
  `}
 ${props =>
   props.commentPostDetails &&
   css`
     font-size: 18px;
     grid-area: postDetails;
   `}

 ${props =>
   props.pageNumber &&
   css`
     font-size: 18px;
     margin: auto 15px;
     color: ${theme.c};
   `}
   ${props => {
     props.topicCardDetails &&
       css`
         grid-area: topicDetails;
       `;
   }}

`;

export const StyledPara = styled.p`
  font-family: "Open Sans", sans-serif;
  ${props =>
    props.articleBody &&
    css`
      grid-area: articleBody;
    `}
  ${props =>
    props.commentBody &&
    css`
      grid-area: commentBody;
    `}
`;
