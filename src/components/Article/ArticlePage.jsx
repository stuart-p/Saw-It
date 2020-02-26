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

  // voteOnArticle = (article_id, voteChangeValue) => {
  //   return new Promise(resolve => {
  //     this.setState(currentState => {
  //       console.log(currentState.article.votes);
  //       return {
  //         article: {
  //           ...currentState.article,
  //           votes: currentState.article.votes + voteChangeValue
  //         }
  //       };
  //     }, resolve);
  //   }).then(() => {
  //     api.modifyVotesOnElement(`articles/${article_id}`, voteChangeValue);
  //   });
  // };

  componentDidMount = () => {
    api
      .fetchSpecificArticle(this.props.article_id)
      .then(article => {
        return new Promise(resolve => {
          this.setState({ article, isLoading: false }, resolve);
        });
      })
      .catch(({ response }) => {
        console.log(response);
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
    console.log(this.state);
    return (
      <PrimaryContainer>
        {this.state.isLoading && <LoadingScreen />}
        {this.state.err ? (
          <ErrorScreen err={this.state.err} />
        ) : (
          <>
            <ArticleDetails
              {...this.state.article}
              {...this.props}
              article_id={this.props.article_id}
            />
            <CommentsList article_id={this.props.article_id} {...this.props} />
          </>
        )}
      </PrimaryContainer>
    );
  }
}

export default ArticlePage;
