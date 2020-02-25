import React, { Component } from "react";
import ArticleDetails from "./ArticleDetails";
import * as api from "../../functions/api";
import CommentsList from "../Comments/CommentsList";

class ArticlePage extends Component {
  state = {
    article: {}
  };

  voteOnArticle = (article_id, voteChangeValue) => {
    return new Promise(resolve => {
      this.setState(currentState => {
        console.log(currentState.article.votes);
        return {
          article: {
            ...currentState.article,
            votes: currentState.article.votes + voteChangeValue
          }
        };
      }, resolve);
    }).then(() => {
      api.modifyVotesOnElement(`articles/${article_id}`, voteChangeValue);
    });
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
        <ArticleDetails
          {...this.state.article}
          {...this.props}
          article_id={this.props.article_id}
          voteOnArticle={this.voteOnArticle}
        />
        <CommentsList article_id={this.props.article_id} {...this.props} />
      </section>
    );
  }
}

export default ArticlePage;
