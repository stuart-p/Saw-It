import React, { Component } from "react";
import ArticleDetails from "./ArticleDetails";
import * as api from "../../functions/api";
import CommentsList from "../Comments/CommentsList";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  componentDidMount = () => {
    api.fetchSpecificArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.article_id !== prevProps.article_id) {
      api.fetchSpecificArticle(this.props.article_id).then(article => {
        this.setState({ article });
      });
    }
  };
  render() {
    return (
      <section>
        <h2>Article...</h2>
        <ArticleDetails {...this.state.article} />
        <CommentsList article_id={this.props.article_id} />
      </section>
    );
  }
}

export default ArticlePage;