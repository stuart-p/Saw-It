import React from "react";

const VoteElement = props => {
  return (
    <div>
      <button>up</button>
      {props.children}
      <button>down</button>
    </div>
  );
};

export default VoteElement;
