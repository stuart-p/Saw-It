import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortArticles from "../UI/SortArticles";
import LoadingScreen from "../ErrorHandling/LoadingScreen";

class ArticleList extends Component {
  state = {
    articleArray: [],
    queries: {},
    isLoading: true
  };

  setQueryValues = queries => {
    this.setState({ queries: { ...queries } });
  };

  componentDidMount = () => {
    const fetchParams = {
      topic: this.props.topicSlug
    };
    api.fetchArticles(fetchParams).then(articleArray => {
      this.setState({
        articleArray,
        isLoading: false
      });
    });
  };

  voteOnArticle = (article_id, voteChangeValue) => {
    return new Promise(resolve => {
      this.setState(currentState => {
        const updatedVotesOnArticlesArray = currentState.articleArray.map(
          article => {
            if (article.article_id === article_id) {
              return { ...article, votes: article.votes + voteChangeValue };
            } else {
              return { ...article };
            }
          }
        );
        return { articleArray: updatedVotesOnArticlesArray };
      }, resolve);
    }).then(() => {
      api.modifyVotesOnElement(`articles/${article_id}`, voteChangeValue);
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topicSlug !== prevProps.topicSlug) {
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
      <section>
        {this.state.isLoading && <LoadingScreen />}
        <SortArticles setQueryValues={this.setQueryValues} />
        <ul className="articleList">
          {this.state.articleArray.map(article => {
            return (
              <ArticleCard
                {...article}
                key={article.article_id}
                loggedInAs={this.props.loggedInAs}
                voteOnArticle={this.voteOnArticle}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ArticleList;
