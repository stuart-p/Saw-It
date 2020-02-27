import styled, { css } from "styled-components";
import theme from "./colourTheme";

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.b};
  z-index: 20;

  div {
    width: 100%;
    background-color: ${theme.a};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    flex-grow: 1;
    font-size: 36px;
    margin: auto auto;
    padding-top: 50%;
  }
`;

export const PrimaryContainer = styled.section`
  width: 100%;
  background-color: ${theme.d};
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: none;
`;

export const HeaderContainer = styled.header`
  background-color: ${theme.a};
  margin: 0;
  padding: 0 5vw;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  color: ${theme.e};
  transition: all 1s ease;

  display: grid;
  grid-template-columns: 75px 1fr 1fr;

  grid-template-rows: ${props =>
    props.showTopics
      ? css`50px 25px 1em 1fr 500px`
      : css`50px 25px 1em 1fr 0px`};
  };
  grid-template-areas:
    "logo title title"
    "logo welcome welcome"
    " . welcome welcome"
    "buttons buttons buttons"
    "topics topics topics";

  svg {
    fill: ${theme.c};
  }
  ul {
    grid-area: topics;
  }
`;

export const ContentContainer = styled.div`
  margin: 5px 7vw;
`;

export const HeaderButtonBox = styled.div`
  grid-area: buttons;
  margin: auto 0;
  display: flex;
  justify-content: space-around;
`;

export const ArticleListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 200px auto;
  padding: 0 5px;
  max-width: 800px;
  align-items: center;
`;

export const ArticleCardContainer = styled.li`
  position: relative;
  list-style-type: none;
  background-color: ${theme.c};
  margin: 5px 0;
  padding: 3px 20px;
  width: 80%;
  border: solid ${theme.e} 2px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 1.5em 1.5em 1fr 5em;
  grid-template-areas:
    "logo topicName"
    "logo postDetails"
    "_ articleSummary"
    "_ engagementSummary";
`;

export const ArticleDetailContainer = styled.section`
  position: relative;
  list-style-type: none;
  background-color: ${theme.c};
  margin: 5px 0;
  padding: 3px 20px;
  width: 80%;
  border: solid ${theme.e} 2px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 1.5em 1.5em 1fr auto 1.5em 6em;
  grid-template-areas:
    "logo topicName"
    "logo postDetails"
    "_ articleSummary"
    "_ articleBody"
    "_ commentCount"
    "_ engagementSummary";

  margin: 10px auto 10px auto;
  max-width: 800px;
  align-items: center;
`;

export const CommentsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 200px auto;
  padding: 0 5px;
  max-width: 800px;
  align-items: center;
`;

export const CommentCardContainer = styled.li`
  position: relative;
  list-style-type: none;
  background-color: ${theme.c};
  margin: 5px 0;
  padding: 3px 20px;
  width: 80%;
  border: solid ${theme.e} 2px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  grid-template-rows: 2.5em 1fr 5em;
  grid-template-areas:
    "logo postDetails deleteButton"
    "_ commentBody commentBody"
    "_ engagementSummary engagementSummary";
`;

export const Footer = styled.section`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 4em;
  background-color: ${theme.a};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  h5 {
    font-size: 16px;
    margin: 0 5px;
  }
`;
