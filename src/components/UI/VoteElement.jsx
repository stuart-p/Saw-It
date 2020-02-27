import React from "react";
import * as api from "../../functions/api";
import {
  StyledVoteElement,
  Button,
  VoteElementBackgroundStripe
} from "../../Style/UI.styles";
import { ReactComponent as Clap } from "../../images/clapping.svg";
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
        <h6>{this.props.votes + this.state.voteModification}</h6>
        <div>
          <VoteElementBackgroundStripe />
          <Button
            onClick={() =>
              this.onClick(this.props.route, this.props.element_id, 1)
            }
            wink
          >
            Clap!
          </Button>
          <Clap height={44} width={44} />
        </div>
        {/* <Button
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, -1)
          }
          eyeroll
        >
          Eyeroll
        </Button> */}
      </StyledVoteElement>
    );
  }
}

export default VoteElement;
