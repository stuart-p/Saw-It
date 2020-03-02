import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";
import SortArticles from "../UI/SortArticles";
import LoadingScreen from "../ErrorHandling/LoadingScreen";
import ErrorScreen from "../ErrorHandling/ErrorScreen";
import { ArticleListContainer } from "../../Style/Containers.styles";
import NavigatePages from "../UI/NavigatePages";
import { PageTitle } from "../../Style/Texts.styles";
import AddArticle from "../UI/AddArticle";
import { NotificationManager } from "react-notifications";

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleArray: [],
      queries: {
        p: 1
      },
      isLoading: true,
      err: null
    };
    this.topOfContainer = React.createRef();
  }

  setQueryValues = queries => {
    this.setState(currentState => {
      return { queries: { ...currentState.queries, ...queries } };
    });
  };

  addArticleToTopic = (articleTitle, articleBody) => {
    const tempArticle = {
      article_id: -1,
      votes: 0,
      created_at: new Date().toUTCString(),
      author: this.props.loggedInAs,
      title: articleTitle,
      body: articleBody,
      topic: this.props.topicSlug
    };
    return new Promise(resolve => {
      this.setState(currentState => {
        return { articleArray: [tempArticle, ...currentState.articleArray] };
      }, resolve);
    })
      .then(() => {
        window.scrollTo(0, this.topOfContainer.current.offsetTop);
        return api.postArticleToTopic(
          this.props.topicSlug,
          this.props.loggedInAs,
          articleTitle,
          articleBody
        );
      })
      .then(postedArticleObject => {
        const articleArrayWithPostInserted = this.state.articleArray.map(
          article => {
            if (article === tempArticle) {
              return postedArticleObject;
            } else return { ...article };
          }
        );
        NotificationManager.success(
          `article added to ${this.props.topicSlug}`,
          "success!",
          2000
        );
        return new Promise(resolve => {
          this.setState(
            { articleArray: articleArrayWithPostInserted },
            resolve
          );
        });
      })
      .catch(err => {
        NotificationManager.error("error adding article", "error", 2000);
        this.setState(currentState => {
          const articleArrayWithTempArticleRemoved = currentState.articleArray.filter(
            article => {
              if (article !== tempArticle) {
                return article;
              }
            }
          );
          return { articleArray: articleArrayWithTempArticleRemoved };
        });
      });
  };

  deleteArticleFromTopic = article_id => {
    return new Promise(resolve => {
      this.setState(currentState => {
        const articleArrayWithArticleDeleted = currentState.articleArray.filter(
          article => {
            return article.article_id !== article_id;
          }
        );
        return { articleArray: articleArrayWithArticleDeleted };
      }, resolve);
    })
      .then(() => {
        return api.removeArticleFromTopic(article_id);
      })
      .then(() => {
        NotificationManager.success("Article deleted!", "Success!", 2000);
      })
      .catch(err => {
        NotificationManager.error("Error when deleting article", "error", 2000);
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
            <ArticleListContainer ref={this.topOfContainer}>
              {this.state.articleArray.map(article => {
                return (
                  <ArticleCard
                    {...article}
                    key={article.article_id}
                    deleteArticleFromTopic={this.deleteArticleFromTopic}
                    loggedInAs={this.props.loggedInAs}
                  />
                );
              })}
            </ArticleListContainer>
            <NavigatePages
              page={this.state.queries.p}
              setQueryValues={this.setQueryValues}
            >
              <AddArticle addArticleToTopic={this.addArticleToTopic} />
            </NavigatePages>
          </>
        )}
      </>
    );
  }
}

export default ArticleList;
