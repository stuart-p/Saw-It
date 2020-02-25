import React, { Component } from "react";
import * as api from "../../functions/api";
import AddComment from "../UI/AddComment";

class CommentsList extends Component {
  state = {
    commentsArray: []
  };

  addCommentToArticle = commentText => {
    console.log(commentText);
  };

  componentDidMount = () => {
    api.fetchCommentsOnArticle(this.props.article_id).then(commentsArray => {
      this.setState({ commentsArray });
    });
  };
  render() {
    return (
      <section>
        <ul>
          {this.state.commentsArray.map(comment => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <h4>{comment.votes}</h4>
              </li>
            );
          })}
        </ul>
        <AddComment addCommentToArticle={this.addCommentToArticle} />
      </section>
    );
  }
}

export default CommentsList;
