import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ title, topic, votes, comment_count, article_id }) => {
  return (
    <Link to={`/${topic}/${article_id}`}>
      <li className="articleCard">
        <h2>{title}</h2>
        <h3>{topic}</h3>
        <h4>votes: {votes}</h4>
        <h5>comments: {comment_count}</h5>
      </li>
    </Link>
  );
};

export default ArticleCard;
