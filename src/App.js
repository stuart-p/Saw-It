import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import TopicList from "./components/Topic/TopicList";
import { Router } from "@reach/router";
import TopicPage from "./components/Topic/TopicPage";
import ArticlePage from "./components/Article/ArticlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path="/" />
        <TopicPage path="/:topicSlug" />
        <ArticlePage path="/:topicSlug/:article_id" />
      </Router>
    </div>
  );
}

export default App;
