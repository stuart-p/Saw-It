import React from "react";
import { Link } from "@reach/router";
import VoteElement from "../UI/VoteElement";

const ArticleCard = ({
  title,
  topic,
  votes,
  comment_count,
  article_id,
  author,
  loggedInAs,
  voteOnArticle
}) => {
  return (
    <li className="articleCard">
      <h3>{author === loggedInAs ? "you" : author} posted</h3>
      <Link to={`/${topic}/${article_id}`}>
        <h2>{title}</h2>
        <h3>{topic}</h3>
        <h5>comments: {comment_count}</h5>
      </Link>
      <VoteElement voteOnElement={voteOnArticle} element_id={article_id}>
        <p>votes: {votes}</p>
      </VoteElement>
    </li>
  );
};

export default ArticleCard;
