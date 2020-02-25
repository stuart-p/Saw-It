import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../../functions/api";

class TopicList extends Component {
  state = {
    topicArray: []
  };

  componentDidMount = () => {
    api.fetchTopics().then(topicArray => {
      this.setState({
        topicArray
      });
    });
  };
  render() {
    return (
      <ul className="topicList">
        {this.state.topicArray.map(topic => {
          return (
            <TopicCard
              {...topic}
              key={topic.slug}
              closeTopicsMenu={this.props.closeTopicsMenu}
            />
          );
        })}
      </ul>
    );
  }
}

export default TopicList;
