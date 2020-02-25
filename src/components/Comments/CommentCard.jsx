import React from "react";
import VoteElement from "../UI/VoteElement";

const CommentCard = ({
  comment_id,
  author,
  body,
  votes,
  deleteCommentFromArticle,
  loggedInAs,
  voteOnComment
}) => {
  return (
    <li className="commentCard">
      <h3>{author === loggedInAs ? "you" : author} posted</h3>
      <p>{body}</p>
      <VoteElement voteOnElement={voteOnComment} element_id={comment_id}>
        <p>{votes}</p>
      </VoteElement>
      {author === loggedInAs && (
        <button onClick={() => deleteCommentFromArticle(comment_id)}>
          delete comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
