import React from "react";
import ArticleList from "../Article/ArticleList";
import { PrimaryContainer } from "../../Style/Containers.styles";

const LandingPage = props => {
  return (
    <PrimaryContainer>
      <h1>Welcome to nc-News homepage</h1>
      <ArticleList {...props} />
    </PrimaryContainer>
  );
};

export default LandingPage;
