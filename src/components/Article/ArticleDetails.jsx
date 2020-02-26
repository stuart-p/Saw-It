import React from "react";
import VoteElement from "../UI/VoteElement";

const ArticleDetails = ({
  article_id,
  author,
  title,
  topic,
  votes,
  comment_count,
  loggedInAs
}) => {
  return (
    <section className="articleDetails">
      <h3>{title}</h3>
      <h4>{author === loggedInAs ? "you" : author} posted</h4>
      <h5>{topic}</h5>
      <VoteElement route="articles" element_id={article_id} votes={votes} />
      <h5>{comment_count} comments</h5>
    </section>
  );
};

export default ArticleDetails;
