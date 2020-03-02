import React from "react";
import { StickNavContainer } from "../../Style/Containers.styles";

const StickyNavBar = ({ showTopics, children }) => {
  return (
    <StickNavContainer showTopics={showTopics}>{children}</StickNavContainer>
  );
};

export default StickyNavBar;
