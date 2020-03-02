import React from "react";
import VoteElement from "../UI/VoteElement";
import { CommentCardContainer } from "../../Style/Containers.styles";
import { SubHeading, StyledPara } from "../../Style/Texts.styles";
import { compareTimeToNow } from "../../functions/functions";
import { Button, CommentCardStripe } from "../../Style/UI.styles";
import { ReactComponent as Delete } from "../../images/trash.svg";

const CommentCard = ({
  comment_id,
  author,
  body,
  votes,
  deleteCommentFromArticle,
  loggedInAs,
  created_at
}) => {
  const howLongAgo = compareTimeToNow(created_at);

  return (
    <CommentCardContainer>
      <SubHeading commentPostDetails>
        {author === loggedInAs ? "you" : author} commented {howLongAgo}
      </SubHeading>
      <StyledPara commentBody>{body}</StyledPara>
      <VoteElement route="comments" element_id={comment_id} votes={votes} />
      {author === loggedInAs && (
        <Button
          onClick={() => deleteCommentFromArticle(comment_id)}
          deleteComment
        >
          <Delete height={28} width={28} />
        </Button>
      )}
      <CommentCardStripe />
    </CommentCardContainer>
  );
};

export default CommentCard;
