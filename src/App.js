import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Router } from "@reach/router";
import TopicPage from "./components/Topic/TopicPage";
import ArticlePage from "./components/Article/ArticlePage";
import LandingPage from "./components/LandingPage/LandingPage";
import ErrorScreen from "./components/ErrorHandling/ErrorScreen";

class App extends React.Component {
  state = {
    loggedInAs: ""
  };
  componentDidMount = () => {
    this.setState({
      loggedInAs: localStorage.getItem("loggedInAs") || "jessjelly"
    });
  };

  render() {
    return (
      <>
        <Header loggedInAs={this.state.loggedInAs} />
        <Router className="main">
          <LandingPage path="/" loggedInAs={this.state.loggedInAs} />
          <TopicPage path="/:topicSlug" loggedInAs={this.state.loggedInAs} />
          <ArticlePage
            path="/:topicSlug/article/:article_id"
            loggedInAs={this.state.loggedInAs}
          />
          <ErrorScreen
            default
            err={{ status: "404", msg: "page not found", route: "unknown" }}
          />
        </Router>
      </>
    );
  }
}

export default App;
