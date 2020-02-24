import React, { Component } from "react";
import * as api from "../../functions/api";

class CommentsList extends Component {
  state = {
    commentsArray: []
  };
  componentDidMount = () => {
    api.fetchCommentsOnArticle(this.props.article_id).then(commentsArray => {
      this.setState({ commentsArray });
    });
  };
  render() {
    return (
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
    );
  }
}

export default CommentsList;
