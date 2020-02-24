import React, { Component } from "react";
import * as api from "../../functions/api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articleArray: []
  };
  componentDidMount = () => {
    api.fetchArticles().then(articleArray => {
      this.setState({
        articleArray
      });
    });
  };
  render() {
    return (
      <ul>
        {this.state.articleArray.map(article => {
          return <ArticleCard {...article} key={article.article_id} />;
        })}
      </ul>
    );
  }
}

export default ArticleList;
