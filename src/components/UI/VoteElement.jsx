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
    // animationFinished: false
  };

  onClick = (route, element_id, voteValue) => {
    return new Promise(resolve => {
      this.setState(currentState => {
        return {
          voteModification: currentState.voteModification + voteValue,
          // animationFinished: false,
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
  // onAnimationStart = () => {
  //   this.setState({ animationFinished: false });
  // };

  render() {
    const clapAnimation = classNames({
      clapGrowAnimation: this.state.clapGrowAnimation
    });

    return (
      <StyledVoteElement articleCard>
        <h6
          onClick={() =>
            this.onClick(this.props.route, this.props.element_id, 1)
          }
        >
          {this.props.votes + this.state.voteModification}
        </h6>
        <div>
          <VoteElementBackgroundStripe
            onClick={() =>
              this.onClick(this.props.route, this.props.element_id, 1)
            }
          />
          <Button
            onClick={() =>
              this.onClick(this.props.route, this.props.element_id, 1)
            }
            wink
          >
            Clap!
          </Button>
          <Clap
            className={clapAnimation}
            height={44}
            width={44}
            onClick={() =>
              this.onClick(this.props.route, this.props.element_id, 1)
            }
            onAnimationEnd={this.onAnimationEnd}
            onAnimationStart={this.onAnimationStart}
          />
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
