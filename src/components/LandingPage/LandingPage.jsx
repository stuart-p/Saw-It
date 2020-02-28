import React from "react";
import ArticleList from "../Article/ArticleList";
import { PrimaryContainer } from "../../Style/Containers.styles";
import { PageTitle } from "../../Style/Texts.styles";

const LandingPage = props => {
  return (
    <PrimaryContainer>
      <PageTitle landingPage>You Saw It Here First</PageTitle>
      <ArticleList {...props} />
    </PrimaryContainer>
  );
};

export default LandingPage;
