import React, { Component } from "react";
import {
  AddElementContainer,
  AddElementForm
} from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";

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
      <AddElementContainer>
        <AddElementForm onSubmit={this.onSubmit}>
          <textarea
            aria-label="Add a comment"
            // type="textarea"
            placeholder="Add a comment..."
            onChange={this.onChange}
            value={this.state.commentInput}
            required
          ></textarea>
          <Button>Post</Button>
        </AddElementForm>
      </AddElementContainer>
    );
  }
}

export default AddComment;
