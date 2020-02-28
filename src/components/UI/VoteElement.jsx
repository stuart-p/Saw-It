import React from "react";
import * as api from "../../functions/api";
import {
  StyledVoteElement,
  Button,
  VoteElementBackgroundStripe
} from "../../Style/UI.styles";
import { ReactComponent as Clap } from "../../images/clapping.svg";
import classNames from "classnames";

class VoteElement extends React.Component {
  state = {
    voteModification: 0,
    clapGrowAnimation: false
  };

  onClick = (route, element_id, voteValue, event) => {
    event.preventDefault();
    return new Promise(resolve => {
      this.setState(currentState => {
        return {
          voteModification: currentState.voteModification + voteValue,
          clapGrowAnimation: !currentState.clapGrowAnimation
        };
      }, resolve);
    }).then(() => {
      api.modifyVotesOnElement(`${route}/${element_id}`, voteValue);
    });
  };

  onAnimationEnd = () => {
    this.setState({ clapGrowAnimation: false });
  };

  render() {
    const clapAnimation = classNames({
      clapGrowAnimation: this.state.clapGrowAnimation
    });

    return (
      <StyledVoteElement articleCard>
        <h6
          onClick={event =>
            this.onClick(this.props.route, this.props.element_id, 1, event)
          }
        >
          {this.props.votes + this.state.voteModification}
        </h6>
        <div>
          <VoteElementBackgroundStripe
            onClick={event =>
              this.onClick(this.props.route, this.props.element_id, 1, event)
            }
          />
          <Button
            onClick={event =>
              this.onClick(this.props.route, this.props.element_id, 1, event)
            }
            wink
          >
            Clap!
          </Button>
          <Clap
            className={clapAnimation}
            height={44}
            width={44}
            onClick={event =>
              this.onClick(this.props.route, this.props.element_id, 1, event)
            }
            onAnimationEnd={this.onAnimationEnd}
            onAnimationStart={this.onAnimationStart}
          />
        </div>
      </StyledVoteElement>
    );
  }
}

export default VoteElement;
