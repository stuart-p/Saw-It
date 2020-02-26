import React from "react";
import ArticleList from "../Article/ArticleList";
import { PrimaryContainer } from "../../Style/Containers.styles";

const TopicPage = props => {
  return (
    <PrimaryContainer>
      <h2>{props.topicSlug}</h2>

      <ArticleList {...props} />
    </PrimaryContainer>
  );
};

export default TopicPage;
