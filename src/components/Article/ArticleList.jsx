import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";

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
          return <ArticleCard {...article} key={article.article_id} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
