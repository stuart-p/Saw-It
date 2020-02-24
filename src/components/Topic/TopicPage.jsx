import React from "react";
import ArticleList from "../Article/ArticleList";

const TopicPage = props => {
  return (
    <div>
      <h2>{props.topicSlug}</h2>

      <ArticleList {...props} />
    </div>
  );
};

export default TopicPage;
