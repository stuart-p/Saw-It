import React from "react";

const ArticleCard = ({ title, topics, votes, comment_count }) => {
  return (
    <li className="articleCard">
      <h2>{title}</h2>
      <h3>{topics}</h3>
      <h4>votes: {votes}</h4>
      <h5>comments: {comment_count}</h5>
    </li>
  );
};

export default ArticleCard;
