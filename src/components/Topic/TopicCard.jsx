import React from "react";
import { Link } from "@reach/router";
import { TopicCardContainer } from "../../Style/Containers.styles";
import { CardHeading, SubHeading } from "../../Style/Texts.styles";

const TopicCard = ({ slug, description, closeTopicsMenu }) => {
  return (
    <Link to={`/topic/${slug}`} onClick={closeTopicsMenu}>
      <TopicCardContainer>
        <CardHeading>{slug}</CardHeading>
        <SubHeading>{description}</SubHeading>
      </TopicCardContainer>
    </Link>
  );
};

export default TopicCard;
