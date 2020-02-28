import React, { Component } from "react";
import TopicCard from "./TopicCard";
import * as api from "../../functions/api";
import { TopicListContainer } from "../../Style/Containers.styles";
import { SubHeading } from "../../Style/Texts.styles";

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
      <TopicListContainer>
        {this.state.topicArray.map(topic => {
          return (
            <TopicCard
              {...topic}
              key={topic.slug}
              closeTopicsMenu={this.props.closeTopicsMenu}
            />
          );
        })}
      </TopicListContainer>
    );
  }
}

export default TopicList;
