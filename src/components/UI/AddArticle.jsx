import React, { Component } from "react";
import {
  AddElementContainer,
  AddElementForm,
  FullScreenElementInputContainer
} from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";
import { SubHeading } from "../../Style/Texts.styles";

class AddArticle extends Component {
  state = {
    articleTitleInput: "",
    articleBodyInput: "",
    inputFormShowing: false
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
    this.setState({
      articleTitleInput: "",
      articleBodyInput: "",
      inputFormShowing: false
    });
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
    return (
      <AddElementContainer>
        {!this.state.inputFormShowing && (
          <Button onClick={this.enableInputFormShowing} addPost>
            Add Article
          </Button>
        )}
        <FullScreenElementInputContainer
          inputFormShowing={this.state.inputFormShowing}
        >
          {this.state.inputFormShowing && (
            <>
              <Button onClick={this.disableInputFormShowing} closeAddPostForm>
                <img
                  src="https://img.icons8.com/material-rounded/30/000000/multiply--v1.png"
                  alt="close form"
                ></img>
              </Button>
              <SubHeading>Enter your article details below</SubHeading>
              <AddElementForm onSubmit={this.onSubmit}>
                <input
                  type="text"
                  aria-label="Add an article title"
                  placeholder="Your Article Title..."
                  onChange={this.onChange}
                  value={this.state.commentInput}
                  name="articleTitleInput"
                  required
                ></input>
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
            </>
          )}
        </FullScreenElementInputContainer>
      </AddElementContainer>
    );
  }
  // render() {
  //   return (
  //     <AddElementContainer>
  //       <AddElementForm onSubmit={this.onSubmit}>
  //         <textarea
  //           aria-label="Add an article title"
  //           placeholder="Your Article Title..."
  //           onChange={this.onChange}
  //           value={this.state.commentInput}
  //           name="articleTitleInput"
  //           required
  //         ></textarea>
  //         <textarea
  //           aria-label="Add an article description"
  //           placeholder="Your Text Post..."
  //           onChange={this.onChange}
  //           value={this.state.commentInput}
  //           name="articleBodyInput"
  //           required
  //         ></textarea>
  //         <Button>Post</Button>
  //       </AddElementForm>
  //     </AddElementContainer>
  //   );
  // }
}

export default AddArticle;
