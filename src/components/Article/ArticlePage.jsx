import React, { Component } from "react";
import ArticleDetails from "./ArticleDetails";
import * as api from "../../functions/api";
import CommentsList from "../Comments/CommentsList";
import LoadingScreen from "../ErrorHandling/LoadingScreen";
import ErrorScreen from "../ErrorHandling/ErrorScreen";
import { PrimaryContainer } from "../../Style/Containers.styles";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount = () => {
    api
      .fetchSpecificArticle(this.props.article_id)
      .then(article => {
        return new Promise(resolve => {
          this.setState({ article, isLoading: false }, resolve);
        });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            status: response.status,
            msg: response.data.msg,
            route: this.props.article_id
          }
        });
      });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.article_id !== prevProps.article_id) {
      return new Promise(resolve => {
        this.setState({ isLoading: true, err: null }, resolve);
      })
        .then(() => {
          return api.fetchSpecificArticle(this.props.article_id);
        })
        .then(article => {
          this.setState({ article, isLoading: false });
        });
    }
  };
  render() {
    return (
      <PrimaryContainer className="primary-container">
        {this.state.isLoading && <LoadingScreen />}
        {this.state.err ? (
          <ErrorScreen err={this.state.err} />
        ) : (
          <>
            <ArticleDetails
              className="article-details"
              {...this.state.article}
              {...this.props}
              article_id={this.props.article_id}
            />
            <CommentsList
              className="commentsList"
              article_id={this.props.article_id}
              {...this.props}
            />
          </>
        )}
      </PrimaryContainer>
    );
  }
}

export default ArticlePage;
