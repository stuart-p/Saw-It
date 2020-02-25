import React from "react";

const CommentCard = ({
  comment_id,
  author,
  body,
  votes,
  deleteCommentFromArticle
}) => {
  return (
    <li>
      <h3>{author}</h3>
      <p>{body}</p>
      <h4>{votes}</h4>
      <button onClick={() => deleteCommentFromArticle(comment_id)}>
        delete comment
      </button>
    </li>
  );
};

export default CommentCard;
