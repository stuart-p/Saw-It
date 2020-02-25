import React from "react";
import TopicList from "../Topic/TopicList";
import { Link } from "@reach/router";

class Header extends React.Component {
  state = {
    topicsShowing: false
  };

  toggleTopicsShowing = () => {
    this.setState(currentState => {
      return { topicsShowing: !currentState.topicsShowing };
    });
  };

  closeTopicsMenu = () => {
    this.setState({ topicsShowing: false });
  };

  render() {
    return (
      <div>
        <h1>Nc-news</h1>
        <h3>hello, {this.props.loggedInAs}!</h3>
        <Link to="/">
          <button>home</button>
        </Link>
        <button onClick={this.toggleTopicsShowing}>topics</button>
        {this.state.topicsShowing && (
          <TopicList closeTopicsMenu={this.closeTopicsMenu} />
        )}
      </div>
    );
  }
}

export default Header;
