import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articleArray: []
  };
  componentDidMount = () => {
    const fetchParams = {
      topic: this.props.topicSlug
    };
    console.log(fetchParams.topic);
    api.fetchArticles(fetchParams).then(articleArray => {
      this.setState({
        articleArray
      });
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topicSlug !== prevProps.topicSlug) {
      const fetchParams = {
        topic: this.props.topicSlug
      };
      api.fetchArticles(fetchParams).then(articleArray => {
        this.setState({
          articleArray
        });
      });
    }
  };
  render() {
    return (
      <ul>
        {this.state.articleArray.map(article => {
          return <ArticleCard {...article} key={article.article_id} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
