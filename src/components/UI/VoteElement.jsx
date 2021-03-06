import React from "react";
import * as api from "../../functions/api";
import {
  StyledVoteElement,
  Button,
  VoteElementBackgroundStripe
} from "../../Style/UI.styles";
import { ReactComponent as Clap } from "../../images/clapping.svg";
import classNames from "classnames";
import { NotificationManager } from "react-notifications";

class VoteElement extends React.Component {
  state = {
    voteModification: 0,
    clapGrowAnimation: false
  };

  onClick = (route, element_id, voteValue, event) => {
    event.preventDefault();
    return new Promise((resolve, reject) => {
      this.setState(currentState => {
        if (currentState.voteModification >= 5)
          return reject({
            response: {
              data: { msg: "You can only applaud a maximum of 5 times" }
            }
          });
        return {
          voteModification: currentState.voteModification + voteValue,
          clapGrowAnimation: !currentState.clapGrowAnimation
        };
      }, resolve);
    })
      .then(() => {
        return api.modifyVotesOnElement(`${route}/${element_id}`, voteValue);
      })
      .then(() => {
        NotificationManager.success(
          `You applauded ${this.state.voteModification} times!`,
          "Success!",
          1000
        );
      })
      .catch(err => {
        NotificationManager.error(err.response.data.msg, "Error", 2000);
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
