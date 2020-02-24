import React from "react";

const ArticleDetails = ({ author, title, topic, votes, comment_count }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <h5>{topic}</h5>
    </div>
  );
};

export default ArticleDetails;
