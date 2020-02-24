import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList />
    </div>
  );
}

export default App;
