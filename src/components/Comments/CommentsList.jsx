import React, { Component } from "react";
import * as api from "../../functions/api";
import AddComment from "../UI/AddComment";
import CommentCard from "./CommentCard";

class CommentsList extends Component {
  state = {
    commentsArray: [],
    err: null
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

  deleteCommentFromArticle = comment_id => {
    return new Promise(resolve => {
      this.setState(currentState => {
        const commentsArrayWithCommentDeleted = currentState.commentsArray.filter(
          comment => {
            return comment.comment_id !== comment_id;
          }
        );
        return { commentsArray: commentsArrayWithCommentDeleted };
      }, resolve);
    }).then(() => {
      api.deleteCommentFromArticle(comment_id);
    });
  };

  voteOnComment = (comment_id, voteChangeValue) => {
    return new Promise(resolve => {
      this.setState(currentState => {
        const updatedCommentsOnVotesArray = currentState.commentsArray.map(
          comment => {
            if (comment.comment_id === comment_id) {
              return { ...comment, votes: comment.votes + voteChangeValue };
            } else {
              return { ...comment };
            }
          }
        );
        return { commentsArray: updatedCommentsOnVotesArray };
      }, resolve);
    }).then(() => {
      api.modifyVotesOnElement(`comments/${comment_id}`, voteChangeValue);
    });
  };

  componentDidMount = () => {
    api
      .fetchCommentsOnArticle(this.props.article_id)
      .then(commentsArray => {
        return new Promise(resolve => {
          this.setState({ commentsArray, err: null }, resolve);
        });
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  render() {
    return (
      <section>
        <ul>
          {this.state.commentsArray.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                {...comment}
                deleteCommentFromArticle={this.deleteCommentFromArticle}
                loggedInAs={this.props.loggedInAs}
                voteOnComment={this.voteOnComment}
              />
            );
          })}
        </ul>
        <AddComment addCommentToArticle={this.addCommentToArticle} />
      </section>
    );
  }
}

export default CommentsList;
