import React from "react";
import * as api from "../../functions/api";
import { StyledVoteElement, Button } from "../../Style/UI.styles";
import clap from "../../images/clapping.png";
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
      <StyledVoteElement articleCard>
        <Button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, 1)
          }
        >
          Clap!
        </Button>
        <div>
          <img src={clap} alt="clap" />
          <h6>{this.props.votes + this.state.voteModification}</h6>
        </div>
        <Button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, -1)
          }
        >
          Pass
        </Button>
      </StyledVoteElement>
    );
  }
}

export default VoteElement;
