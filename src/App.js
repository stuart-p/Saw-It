import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import { Router } from "@reach/router";
import TopicPage from "./components/Topic/TopicPage";
import ArticlePage from "./components/Article/ArticlePage";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LandingPage path="/" />
        <TopicPage path="/:topicSlug" />
        <ArticlePage path="/:topicSlug/:article_id" />
      </Router>
    </div>
  );
}

export default App;
