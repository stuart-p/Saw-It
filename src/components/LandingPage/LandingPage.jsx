import React from "react";
import ArticleList from "../Article/ArticleList";

const LandingPage = props => {
  return (
    <div>
      <h1>Welcome to nc-News homepage</h1>
      <ArticleList {...props} />
    </div>
  );
};

export default LandingPage;
