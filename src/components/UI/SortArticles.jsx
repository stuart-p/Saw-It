import React, { Component } from "react";
import { ArticleSortContainer } from "../../Style/Containers.styles";
import { Button } from "../../Style/UI.styles";

class SortArticles extends Component {
  state = {
    sort_by: "",
    order: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.setQueryValues({
      sort_by: this.state.sort_by,
      order: this.state.order
    });
  };

  onChange = event => {
    return this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <ArticleSortContainer>
        <form onSubmit={this.onSubmit}>
          <label>
            sort articles by: <br />
            <select
              name="sort_by"
              onChange={this.onChange}
              value={this.state.sort_by}
            >
              <option value={""}>none</option>
              <option value={"created_at"}>creation date</option>
              <option value={"votes"}>votes</option>
              <option value={"comment_count"}>comment count</option>
            </select>
          </label>
          <label>
            article order: <br />
            <select
              name="order"
              onChange={this.onChange}
              value={this.state.order}
            >
              <option value={""}>default</option>
              <option value={"asc"}>ascending</option>
              <option value={"desc"}>descending</option>
            </select>
          </label>
          <Button>sort</Button>
        </form>
      </ArticleSortContainer>
    );
  }
}

export default SortArticles;
