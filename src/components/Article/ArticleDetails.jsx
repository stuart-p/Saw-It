import React from "react";
import VoteElement from "../UI/VoteElement";

const ArticleDetails = ({
  article_id,
  author,
  title,
  topic,
  votes,
  comment_count,
  voteOnArticle,
  loggedInAs
}) => {
  return (
    <section className="articleDetails">
      <h3>{title}</h3>
      <h4>{author === loggedInAs ? "you" : author} posted</h4>
      <h5>{topic}</h5>
      <VoteElement voteOnElement={voteOnArticle} element_id={article_id}>
        <p>votes: {votes}</p>
      </VoteElement>
      <h5>{comment_count} comments</h5>
    </section>
  );
};

export default ArticleDetails;
