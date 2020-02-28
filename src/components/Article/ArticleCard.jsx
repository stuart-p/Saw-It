import React from "react";
import VoteElement from "../UI/VoteElement";
import { ArticleCardContainer } from "../../Style/Containers.styles";
import { compareTimeToNow } from "../../functions/functions";
import { SubHeading, CardHeading, StyledLink } from "../../Style/Texts.styles";
import { ArticleCardStripe } from "../../Style/UI.styles";

const ArticleCard = ({
  title,
  topic,
  votes,
  comment_count,
  article_id,
  author,
  loggedInAs,
  created_at
}) => {
  const howLongAgo = compareTimeToNow(created_at);
  return (
    <StyledLink to={`/${topic}/article/${article_id}`}>
      <ArticleCardContainer>
        <SubHeading articleTopicName>{topic}</SubHeading>
        <SubHeading articlePostDetails>
          {author === loggedInAs ? "you" : author} posted {howLongAgo}
        </SubHeading>

        <CardHeading articleSummary>{title}</CardHeading>
        <SubHeading articleCommentCount>{comment_count} comments</SubHeading>
        <VoteElement
          route="articles"
          element_id={article_id}
          votes={votes}
          articleCard
        />
        <ArticleCardStripe />
      </ArticleCardContainer>
    </StyledLink>
  );
};

export default ArticleCard;
