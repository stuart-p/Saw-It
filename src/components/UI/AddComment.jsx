import React, { Component } from "react";

class AddComment extends Component {
  state = {
    commentInput: ""
  };

  onChange = event => {
    this.setState({
      commentInput: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addCommentToArticle(this.state.commentInput);
    this.setState({ commentInput: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Add a comment
            <input
              type="text"
              size={60}
              onChange={this.onChange}
              value={this.state.commentInput}
              required
            ></input>
            <button>Post</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddComment;
