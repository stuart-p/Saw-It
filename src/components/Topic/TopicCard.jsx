import React from "react";
import { Link } from "@reach/router";

const TopicCard = ({ slug, description, closeTopicsMenu }) => {
  return (
    <Link to={`/${slug}`} onClick={closeTopicsMenu}>
      <li className="articleCard">
        <h2>{slug}</h2>
        <h3>{description}</h3>
      </li>
    </Link>
  );
};

export default TopicCard;
