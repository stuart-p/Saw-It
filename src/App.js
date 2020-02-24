import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import TopicList from "./components/Topic/TopicList";

function App() {
  return (
    <div className="App">
      <Header />
      <TopicList />
      <ArticleList />
    </div>
  );
}

export default App;
