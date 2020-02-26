import styled, { css } from "styled-components";
import theme from "./colourTheme";
import { Link } from "@reach/router";

export const PageTitle = styled.h1`
  text-align: center;
  grid-area: title;
  margin: 0;
  align-self: center;
`;

export const CardHeading = styled.h2`
  margin: 0;

  ${props =>
    props.articleSummary &&
    css`
      grid-area: articleSummary;
    `}
`;

export const StyledLink = styled(Link)`
  grid-area: articleSummary;
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
`;
