import React from "react";
import * as api from "../../functions/api";

class VoteElement extends React.Component {
  state = {
    voteModification: 0
  };

  onClick = (route, element_id, voteValue) => {
    return new Promise(resolve => {
      this.setState(currentState => {
        return { voteModification: currentState.voteModification + voteValue };
      }, resolve);
    }).then(() => {
      api.modifyVotesOnElement(`${route}/${element_id}`, voteValue);
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, 1)
          }
        >
          up
        </button>
        <h6>claps: {this.props.votes + this.state.voteModification}</h6>
        <button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, -1)
          }
        >
          down
        </button>
      </div>
    );
  }
}

export default VoteElement;
