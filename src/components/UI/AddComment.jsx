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
          <label>
            Add a comment
            <input
              type="text"
              size={25}
              onChange={this.onChange}
              value={this.state.commentInput}
              required
            ></input>
            <Button>Post</Button>
          </label>
        </AddElementForm>
      </AddElementContainer>
    );
  }
}

export default AddComment;
