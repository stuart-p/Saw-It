import React from "react";
import * as api from "../../functions/api";
import {
  StyledVoteElement,
  Button,
  VoteElementBackgroundStripe
} from "../../Style/UI.styles";
import { ReactComponent as Eye } from "../../images/eyeIcon.svg";
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
          wink
        >
          Wink!
        </Button>
        <h6>{this.props.votes + this.state.voteModification}</h6>
        <VoteElementBackgroundStripe />
        <div>
          <Eye height={40} width={40} />
        </div>
        <Button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, -1)
          }
          eyeroll
        >
          Eyeroll
        </Button>
      </StyledVoteElement>
    );
  }
}

export default VoteElement;
