import React from "react";
import VoteElement from "../UI/VoteElement";
import { ArticleCardContainer } from "../../Style/Containers.styles";
import { compareTimeToNow } from "../../functions/functions";
import { SubHeading, CardHeading, StyledLink } from "../../Style/Texts.styles";
import { ArticleCardStripe, Button } from "../../Style/UI.styles";
import { ReactComponent as Delete } from "../../images/trash.svg";

const ArticleCard = ({
  title,
  topic,
  votes,
  comment_count,
  article_id,
  author,
  loggedInAs,
  created_at,
  deleteArticleFromTopic
}) => {
  const howLongAgo = compareTimeToNow(created_at);

  const handlClick = event => {
    event.preventDefault();
    deleteArticleFromTopic(article_id);
  };

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
        {author === loggedInAs && (
          <Button onClick={handlClick} deleteComment>
            <Delete height={28} width={28} />
          </Button>
        )}
        <ArticleCardStripe />
      </ArticleCardContainer>
    </StyledLink>
  );
};

export default ArticleCard;
