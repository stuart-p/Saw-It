import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortArticles from "../UI/SortArticles";
import LoadingScreen from "../ErrorHandling/LoadingScreen";
import ErrorScreen from "../ErrorHandling/ErrorScreen";
import { ArticleListContainer } from "../../Style/Containers.styles";
import NavigatePages from "../UI/NavigatePages";

class ArticleList extends Component {
  state = {
    articleArray: [],
    queries: {},
    isLoading: true,
    err: null
  };

  setQueryValues = queries => {
    this.setState({ queries: { ...queries } });
  };

  componentDidMount = () => {
    const fetchParams = {
      topic: this.props.topicSlug
    };
    api
      .fetchArticles(fetchParams)
      .then(articleArray => {
        return new Promise(resolve => {
          this.setState(
            {
              articleArray,
              isLoading: false
            },
            resolve
          );
        });
      })
      .catch(({ response }) => {
        console.log(response);
        this.setState({
          err: {
            status: response.status,
            msg: response.data.msg,
            route: this.props.topicSlug
          },
          isLoading: false
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topicSlug !== prevProps.topicSlug) {
      const fetchParams = {
        topic: this.props.topicSlug,
        ...this.state.queries
      };
      return new Promise(resolve => {
        this.setState({ isLoading: true, err: null }, resolve);
      })
        .then(() => {
          return api.fetchArticles(fetchParams);
        })
        .then(articleArray => {
          this.setState({
            articleArray,
            isLoading: false
          });
        });
    } else if (
      !Object.values(this.state.queries).every((query, iteratee) => {
        return query === Object.values(prevState.queries)[iteratee];
      })
    ) {
      const fetchParams = {
        topic: this.props.topicSlug,
        ...this.state.queries
      };
      return new Promise(resolve => {
        this.setState({ isLoading: true }, resolve);
      })
        .then(() => {
          // console.log("here in article list");
          return api.fetchArticles(fetchParams);
        })
        .then(articleArray => {
          // console.log(articleArray);
          this.setState({
            articleArray,
            isLoading: false
          });
        });
    }
  };
  render() {
    // console.log(this.state);
    return (
      <>
        {this.state.isLoading && <LoadingScreen />}
        {this.state.err ? (
          <ErrorScreen err={this.state.err} />
        ) : (
          <>
            <h2>{this.props.topicSlug}</h2>
            <SortArticles setQueryValues={this.setQueryValues} />
            <ArticleListContainer>
              {this.state.articleArray.map(article => {
                return (
                  <ArticleCard
                    {...article}
                    key={article.article_id}
                    loggedInAs={this.props.loggedInAs}
                  />
                );
              })}
            </ArticleListContainer>
            <NavigatePages />
          </>
        )}
      </>
    );
  }
}

export default ArticleList;
