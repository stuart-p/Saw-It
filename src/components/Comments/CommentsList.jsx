import React, { Component } from "react";
import * as api from "../../functions/api";
import AddComment from "../UI/AddComment";

class CommentsList extends Component {
  state = {
    commentsArray: []
  };

  addCommentToArticle = commentText => {
    const tempComment = {
      comment_id: -1,
      votes: 0,
      created_at: new Date().toUTCString(),
      author: this.props.loggedInAs,
      body: commentText
    };
    return new Promise(resolve => {
      this.setState(currentState => {
        return { commentsArray: [tempComment, ...currentState.commentsArray] };
      }, resolve);
    })
      .then(() => {
        return api.postCommentToArticle(
          this.props.article_id,
          this.props.loggedInAs,
          commentText
        );
      })
      .then(postedCommentObject => {
        const commentsArrayWithPostInserted = this.state.commentsArray.map(
          comment => {
            if (comment === tempComment) {
              return postedCommentObject;
            } else return { ...comment };
          }
        );
        this.setState({ commentsArray: commentsArrayWithPostInserted });
      });
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
