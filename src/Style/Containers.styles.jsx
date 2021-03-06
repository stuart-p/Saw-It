import styled, { css } from "styled-components";
import theme from "./colourTheme";

export const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.d};
  z-index: 20;

  div {
    width: 100%;
    background-color: ${theme.b};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    flex-grow: 1;
    font-size: 36px;
    margin: auto auto;
    padding-top: 20%;
  }
  svg {
    flex-grow: 5;
    height: 120px;
    width: 120px;
  }
  svg path {
    stroke: ${theme.a};
  }
  svg circle {
    fill: ${theme.a};
  }
`;

export const PrimaryContainer = styled.section`
  width: 100%;
  background-color: ${theme.d};
  flex-grow: 1;
  margin: 0;
  padding: 1.5em 0 0 0;
  border: none;
`;

export const HeaderContainer = styled.header`
  position: relative;
  background-color: ${theme.a};
  padding: 0 5vw;
  z-index: 8;
  box-shadow: ${props =>
    !props.showTopics && css`0 5px 10px rgba(0, 0, 0, 0.3)`};
`;

export const TitleHeaderContainer = styled.div`
  color: ${theme.e};
  transition: all 1s ease;

  display: grid;
  grid-template-columns: 75px 1fr 1fr;
  grid-template-rows: 50px 25px 1.7em;
  grid-template-areas:
    "logo title title"
    "logo title title"
    " buttons welcome welcome";

  svg {
    fill: ${theme.e};
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
  margin: 0 auto 120px auto;
  padding: 0 5px;
  max-width: 800px;
  align-items: center;
`;

export const ArticleCardContainer = styled.li`
  position: relative;
  list-style-type: none;
  background-color: ${theme.c};
  margin: 5px auto;
  padding: 3px 20px;
  width: 80%;
  border: solid ${theme.e} 2px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  grid-template-rows: 1.4em 2em 1fr 1.5em 6em;
  grid-template-areas:
    "logo topicName deleteButton"
    "logo postDetails postDetails"
    "_ articleSummary articleSummary"
    "_ commentCount commentCount"
    "_ engagementSummary engagementSummary";
`;

export const ArticleSortContainer = styled.section`
  margin: 10px auto 10px auto;
  padding: 10px 20px;
  width: 80%;
  max-width: 320px;
  background-color: ${theme.c};
  border: solid 2px ${theme.e};
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

  form {
    display: grid;
    grid-template-columns: 1fr 50px;
    grid-template-rows: 1fr;
  }
  button {
    grid-column: 2/3;
    grid-row: 1/3;
    padding: 15px 0;
    max-height: 50px;
  }
  label {
    font-size: 16px;
  }
  select {
    border: solid ${theme.e} 1px;
    font-size: 16px;
  }
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
  grid-template-rows: 1.5em 2em 1fr auto 1.5em 6em;
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

export const BackToTopicHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 20px 0 0;
`;

export const CommentsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto 120px auto;
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
  grid-template-rows: 2.5em 1fr 5.5em;
  grid-template-areas:
    "logo postDetails deleteButton"
    "_ commentBody commentBody"
    "_ engagementSummary engagementSummary";
`;

export const Footer = styled.section`
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: ${theme.e};
  border-top: solid 2px ${theme.e};
  padding-top: 3px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  h5 {
    font-size: 16px;
    margin: 0 5px;
  }
`;

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
`;

export const AddElementContainer = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
`;

export const AddElementForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 0 5px 0px;
  flex-grow: 1;
  input {
    padding: 10px 5px;
    margin: 5px 0;
    font-family: "Open Sans", sans-serif;
    background-color: ${theme.c};
    border-radius: 3px;
    border: solid ${theme.e} 2px;

    font-size: 16px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    resize: none;
  }
  textarea {
    flex-grow: 1;
    padding: 10px 5px;
    margin: 5px 0;
    font-family: "Open Sans", sans-serif;
    background-color: ${theme.c};
    border: solid ${theme.e} 2px;
    border-radius: 3px;
    font-size: 16px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    resize: none;
    overflow: auto;
  }
`;

export const FullScreenElementInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${theme.d};
  height: 0;
  border-radius: 3px;
  max-height: 80vh;
  overflow: hidden;
  transition: all 1s ease;
  ${props =>
    props.inputFormShowing &&
    css`
      height: 500px;
    `}
`;

export const TopicHeaderContainer = styled.div`
  position: absolute;
  grid-area: topics;
  display: flex;
  flex-direction: column;
  background-color: ${theme.a};
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
  top: 100%;
  left: 0;
  margin: 0;
  padding: 0 0 0 0;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 1s ease;
  height: 0px;
  ${props =>
    props.showTopics &&
    !props.stickyNavShowing &&
    css`
      padding: 2.4em 0 0 0;

      margin: 0px auto 0px auto;
      border-bottom: solid 2px ${theme.e};

      height: 500px;
    `}
  z-index: 8;
`;

export const ExpandedButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;

  a {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const TopicListContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px auto 0px auto;
  padding: 0 5px;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const TopicCardContainer = styled.li`
  position: relative;
  list-style-type: none;
  background-color: ${theme.c};
  margin: 5px auto;
  padding: 3px 20px;
  width: 12em;
  min-height: 8em;
  border: solid ${theme.e} 2px;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3em 1fr;
  grid-template-areas:
    "topicSlug"
    "topicDetails";

  color: black;
  text-decoration: none;
`;

export const StickNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.a};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 4vh;
  max-height: 40px;
  z-index: 12;
  transition: all 1s ease;
  ${props =>
    props.showTopics &&
    css`
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    `}
`;

export const AboutPageTextContainer = styled.section`
  width: 80%;
  max-width: 800px;
  margin: 20px auto;
`;
