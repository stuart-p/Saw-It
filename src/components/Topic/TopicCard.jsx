import React from "react";

const TopicCard = ({ slug, description }) => {
  return (
    <li className="articleCard">
      <h2>{slug}</h2>
      <h3>{description}</h3>
    </li>
  );
};

export default TopicCard;
