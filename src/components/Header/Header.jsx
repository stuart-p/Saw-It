import React from "react";
import TopicList from "../Topic/TopicList";

class Header extends React.Component {
  state = {
    topicsShowing: false
  };

  toggleTopicsShowing = () => {
    this.setState(currentState => {
      return { topicsShowing: !currentState.topicsShowing };
    });
  };

  render() {
    return (
      <div>
        <h1>Nc-news</h1>
        <button onClick={this.toggleTopicsShowing}>topics</button>
        {this.state.topicsShowing && <TopicList />}
      </div>
    );
  }
}

export default Header;
