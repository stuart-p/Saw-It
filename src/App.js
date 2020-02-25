import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleList from "./components/Article/ArticleList";
import { Router } from "@reach/router";
import TopicPage from "./components/Topic/TopicPage";
import ArticlePage from "./components/Article/ArticlePage";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends React.Component {
  state = {
    loggedInAs: ""
  };
  componentDidMount = () => {
    this.setState({
      loggedInAs: localStorage.getItem("loggedInAs") || "jesjelly"
    });
  };
  render() {
    return (
      <div className="App">
        <Header loggedInAs={this.state.loggedInAs} />
        <Router>
          <LandingPage path="/" loggedInAs={this.state.loggedInAs} />
          <TopicPage path="/:topicSlug" />
          <ArticlePage
            path="/:topicSlug/:article_id"
            loggedInAs={this.state.loggedInAs}
          />
        </Router>
      </div>
    );
  }
}

export default App;
