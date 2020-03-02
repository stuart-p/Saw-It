import React, { Component } from "react";
import {
  AddElementContainer,
  AddElementForm,
  FullScreenElementInputContainer
} from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";
import { SubHeading } from "../../Style/Texts.styles";

class AddComment extends Component {
  state = {
    commentInput: "",
    inputFormShowing: false
  };

  onChange = event => {
    this.setState({
      commentInput: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addCommentToArticle(this.state.commentInput);
    this.setState({ commentInput: "", inputFormShowing: false });
  };

  enableInputFormShowing = () => {
    return this.setState({
      inputFormShowing: true
    });
  };

  disableInputFormShowing = () => {
    return this.setState({ inputFormShowing: false });
  };

  render() {
    const { inputFormShowing, commentInput } = this.state;
    return (
      <AddElementContainer>
        {!inputFormShowing && (
          <Button onClick={this.enableInputFormShowing} addPost>
            Add Comment
          </Button>
        )}

        <FullScreenElementInputContainer inputFormShowing={inputFormShowing}>
          {inputFormShowing && (
            <>
              <Button onClick={this.disableInputFormShowing} closeAddPostForm>
                <img
                  src="https://img.icons8.com/material-rounded/30/000000/multiply--v1.png"
                  alt="close form"
                ></img>
              </Button>
              <SubHeading>Enter your comment below</SubHeading>
              <AddElementForm onSubmit={this.onSubmit}>
                <textarea
                  aria-label="Add a comment"
                  placeholder="Add a comment..."
                  onChange={this.onChange}
                  value={commentInput}
                  required
                ></textarea>
                <Button>Post</Button>
              </AddElementForm>
            </>
          )}
        </FullScreenElementInputContainer>
      </AddElementContainer>
    );
  }
}

export default AddComment;
