import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ slug, description }) => {
  return (
    <Link to={`/${slug}`}>
      <li className="articleCard">
        <h2>{slug}</h2>
        <h3>{description}</h3>
      </li>
    </Link>
  );
};

export default TopicCard;
