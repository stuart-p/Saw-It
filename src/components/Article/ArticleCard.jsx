import React from "react";
import { Link } from "@reach/router";
import VoteElement from "../UI/VoteElement";
import { ArticleCardContainer } from "../../Style/Containers.styles";
import { compareTimeToNow } from "../../functions/functions";
import { SubHeading, CardHeading, StyledLink } from "../../Style/Texts.styles";

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
    <ArticleCardContainer>
      <SubHeading articleTopicName>{topic}</SubHeading>
      <SubHeading articlePostDetails>
        {author === loggedInAs ? "you" : author} posted {howLongAgo}
      </SubHeading>

      <StyledLink to={`/${topic}/${article_id}`}>
        <CardHeading articleSummary>{title}</CardHeading>
        <h5>comments: {comment_count}</h5>
      </StyledLink>
      <VoteElement
        route="articles"
        element_id={article_id}
        votes={votes}
        articleCard
      />
      {/* <VoteElement route="articles" element_id={article_id} votes={votes} /> */}
    </ArticleCardContainer>
  );
};

export default ArticleCard;
