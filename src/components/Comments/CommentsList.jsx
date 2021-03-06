import React, { Component } from "react";
import * as api from "../../functions/api";
import AddComment from "../UI/AddComment";
import CommentCard from "./CommentCard";
import { CommentsListContainer } from "../../Style/Containers.styles";
import NavigatePages from "../UI/NavigatePages";
import LoadingScreen from "../ErrorHandling/LoadingScreen";
import { NotificationManager } from "react-notifications";

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsArray: [],
      queries: {
        p: 1
      },
      err: null,
      isLoading: false
    };
    this.topOfContainer = React.createRef();
  }

  setQueryValues = queries => {
    this.setState(currentState => {
      return { queries: { ...currentState.queries, ...queries } };
    });
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
        window.scrollTo(0, this.topOfContainer.current.offsetTop);
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
        NotificationManager.success(
          "comment added to article",
          "success!",
          2000
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
    })
      .then(() => {
        return api.deleteCommentFromArticle(comment_id);
      })
      .then(() => {
        NotificationManager.success("comment deleted!", "success!", 2000);
      })
      .catch(err => {
        NotificationManager.error("failed to delete comment", "error", 2000);
      });
  };

  componentDidMount = () => {
    api
      .fetchCommentsOnArticle(this.props.article_id, this.state.queries)
      .then(commentsArray => {
        return new Promise(resolve => {
          this.setState({ commentsArray, err: null }, resolve);
        });
      })
      .catch(({ response }) => {});
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      !Object.values(this.state.queries).every((query, iteratee) => {
        return query === Object.values(prevState.queries)[iteratee];
      })
    ) {
      return new Promise(resolve => {
        this.setState({ isLoading: true, err: null }, resolve);
      })
        .then(() => {
          return api.fetchCommentsOnArticle(
            this.props.article_id,
            this.state.queries
          );
        })
        .then(commentsArray => {
          return new Promise(resolve => {
            this.setState(
              { commentsArray, err: null, isLoading: false },
              resolve
            );
          });
        })
        .catch(({ response }) => {});
    }
  };
  render() {
    return (
      <>
        {this.state.isLoading && <LoadingScreen />}
        <CommentsListContainer ref={this.topOfContainer}>
          {this.state.commentsArray.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                {...comment}
                deleteCommentFromArticle={this.deleteCommentFromArticle}
                loggedInAs={this.props.loggedInAs}
              />
            );
          })}
        </CommentsListContainer>
        <NavigatePages
          className="NavigatePages"
          page={this.state.queries.p}
          setQueryValues={this.setQueryValues}
        >
          <AddComment addCommentToArticle={this.addCommentToArticle} />
        </NavigatePages>
      </>
    );
  }
}

export default CommentsList;
