import React from "react";
import VoteElement from "../UI/VoteElement";

const CommentCard = ({
  comment_id,
  author,
  body,
  votes,
  deleteCommentFromArticle,
  loggedInAs
}) => {
  return (
    <li className="commentCard">
      <h3>{author === loggedInAs ? "you" : author} posted</h3>
      <p>{body}</p>
      <VoteElement route="comments" element_id={comment_id} votes={votes} />
      {author === loggedInAs && (
        <button onClick={() => deleteCommentFromArticle(comment_id)}>
          delete comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
