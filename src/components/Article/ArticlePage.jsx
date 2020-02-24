import React, { Component } from "react";
import ArticleDetails from "./ArticleDetails";

class ArticlePage extends Component {
  state = {
    article: {
      author: "grumpy19",
      title:
        "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
      article_id: 6,
      body:
        "Functions are objects in JavaScript, as you should know by now, if you have read any of the prerequisite articles. And as objects, functions have methods, including the powerful Apply, Call, and Bind methods. On the one hand, Apply and Call are nearly identical and are frequently used in JavaScript for borrowing methods and for setting the this value explicitly. We also use Apply for variable-arity functions; you will learn more about this in a bit.",
      topic: "coding",
      created_at: "2018-03-14T10:27:39.137Z",
      votes: 0,
      comment_count: 11
    }
  };
  render() {
    return (
      <section>
        <h2>Article...</h2>
        <ArticleDetails {...this.state.article} />
      </section>
    );
  }
}

export default ArticlePage;
