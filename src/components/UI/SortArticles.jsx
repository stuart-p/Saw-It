import React, { Component } from "react";

class SortArticles extends Component {
  state = {
    sort_by: "",
    order: ""
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onChange = event => {
    return this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <p>sort by...</p>
        <form onSubmit={this.onSubmit}>
          <label>
            sort by:
            <select
              name="sort_by"
              onChange={this.onChange}
              value={this.state.sort_by}
            >
              <option value={""}>none</option>
              <option value={"created_at"}>creation date</option>
              <option value={"votes"}>votes</option>
              <option value={"comments_count"}>comment count</option>
            </select>
          </label>
          <label>
            order
            <select
              name="order"
              onChange={this.onChange}
              value={this.state.order}
            >
              <option value={""}>none</option>
              <option value={"asc"}>ascending</option>
              <option value={"desc"}>descending</option>
            </select>
          </label>
          <button>go</button>
        </form>
      </div>
    );
  }
}

export default SortArticles;
