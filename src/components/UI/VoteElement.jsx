import React from "react";

const VoteElement = props => {
  return (
    <div>
      <button onClick={() => props.voteOnElement(props.element_id, 1)}>
        up
      </button>
      {props.children}
      <button onClick={() => props.voteOnElement(props.element_id, -1)}>
        down
      </button>
    </div>
  );
};

export default VoteElement;
