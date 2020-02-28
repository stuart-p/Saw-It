import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortArticles from "../UI/SortArticles";
import LoadingScreen from "../ErrorHandling/LoadingScreen";
import ErrorScreen from "../ErrorHandling/ErrorScreen";
import { ArticleListContainer } from "../../Style/Containers.styles";
import NavigatePages from "../UI/NavigatePages";
import { PageTitle } from "../../Style/Texts.styles";

class ArticleList extends Component {
  state = {
    articleArray: [],
    queries: {
      p: 1
    },
    isLoading: true,
    err: null
  };

  setQueryValues = queries => {
    this.setState(currentState => {
      return { queries: { ...currentState.queries, ...queries } };
    });
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
          return api.fetchArticles(fetchParams);
        })
        .then(articleArray => {
          this.setState({
            articleArray,
            isLoading: false
          });
        });
    }
  };
  render() {
    return (
      <>
        {this.state.isLoading && <LoadingScreen />}
        {this.state.err ? (
          <ErrorScreen err={this.state.err} />
        ) : (
          <>
            <PageTitle>{this.props.topicSlug}</PageTitle>
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
            <NavigatePages
              page={this.state.queries.p}
              setQueryValues={this.setQueryValues}
            />
          </>
        )}
      </>
    );
  }
}

export default ArticleList;
