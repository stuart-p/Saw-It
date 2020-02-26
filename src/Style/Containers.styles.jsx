import styled, { css } from "styled-components";
import theme from "./colourTheme";

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.c};
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
