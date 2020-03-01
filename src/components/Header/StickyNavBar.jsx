import React from "react";
import { StickNavContainer } from "../../Style/Containers.styles";

const StickyNavBar = props => {
  return (
    <StickNavContainer showTopics={props.showTopics}>
      {props.children}
    </StickNavContainer>
  );
};

export default StickyNavBar;
