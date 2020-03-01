import React, { Component } from "react";
import {
  AddElementContainer,
  AddElementForm
} from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";

class AddArticle extends Component {
  state = {
    articleTitleInput: "",
    articleBodyInput: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addArticleToTopic(
      this.state.articleTitleInput,
      this.state.articleBodyInput
    );
    this.setState({ articleTitleInput: "", articleBodyInput: "" });
  };
  render() {
    return (
      <AddElementContainer>
        <AddElementForm onSubmit={this.onSubmit}>
          <textarea
            aria-label="Add an article title"
            placeholder="Your Article Title..."
            onChange={this.onChange}
            value={this.state.commentInput}
            name="articleTitleInput"
            required
          ></textarea>
          <textarea
            aria-label="Add an article description"
            placeholder="Your Text Post..."
            onChange={this.onChange}
            value={this.state.commentInput}
            name="articleBodyInput"
            required
          ></textarea>
          <Button>Post</Button>
        </AddElementForm>
      </AddElementContainer>
    );
  }
}

export default AddArticle;
