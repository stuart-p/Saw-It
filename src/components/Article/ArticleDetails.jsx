import React from "react";
import VoteElement from "../UI/VoteElement";
import { ArticleDetailContainer } from "../../Style/Containers.styles";
import { SubHeading, CardHeading, StyledPara } from "../../Style/Texts.styles";
import { compareTimeToNow } from "../../functions/functions";

const ArticleDetails = ({
  article_id,
  author,
  title,
  topic,
  votes,
  comment_count,
  loggedInAs,
  created_at,
  body
}) => {
  const howLongAgo = compareTimeToNow(created_at);
  return (
    <ArticleDetailContainer>
      <SubHeading articleTopicName>{topic}</SubHeading>
      <SubHeading articlePostDetails>
        {author === loggedInAs ? "you" : author} posted {howLongAgo}
      </SubHeading>
      <CardHeading articleSummary>{title}</CardHeading>
      <StyledPara articleBody>{body}</StyledPara>
      <VoteElement
        route="articles"
        element_id={article_id}
        votes={votes || 0}
      />
      <SubHeading articleCommentCount>{comment_count} comments</SubHeading>
    </ArticleDetailContainer>
  );
};

export default ArticleDetails;
