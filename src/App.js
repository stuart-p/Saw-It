import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import TopicList from "./components/Topic/TopicList";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <TopicList />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/:topicSlug" />
      </Router>
    </div>
  );
}

export default App;
