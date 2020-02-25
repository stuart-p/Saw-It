import React from "react";

const CommentCard = ({
  comment_id,
  author,
  body,
  votes,
  deleteCommentFromArticle,
  loggedInAs
}) => {
  return (
    <li>
      <h3>{author === loggedInAs ? "you" : author} posted</h3>
      <p>{body}</p>
      <h4>{votes}</h4>
      {author === loggedInAs && (
        <button onClick={() => deleteCommentFromArticle(comment_id)}>
          delete comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
