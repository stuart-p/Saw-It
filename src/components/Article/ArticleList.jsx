import React, { Component } from "react";
import * as api from "../../functions/api";

class ArticleList extends Component {
  state = {
    articleList: []
  };
  componentDidMount = () => {
    api.fetchArticles().then(articleArray => {
      this.setState({
        articleList: articleArray
      });
    });
  };
  render() {
    return (
      <ul>
        {this.state.articleList.map(article => {
          return (
            <li key={article.title}>
              <h2>{article.title}</h2>
              <h3>{article.topic}</h3>
              <h4>{article.votes}</h4>
              <h5>{article.comment_count}</h5>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArticleList;
