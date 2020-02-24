import React, { Component } from "react";

class CommentsList extends Component {
  state = {
    commentsArray: [
      {
        comment_id: 244,
        votes: 7,
        created_at: "2017-10-12T14:07:56.079Z",
        author: "jessjelly",
        body:
          "Quaerat impedit totam unde sint recusandae aut ratione repudiandae libero. Ut corporis neque."
      },
      {
        comment_id: 183,
        votes: 15,
        created_at: "2017-06-02T02:32:50.127Z",
        author: "cooljmessy",
        body:
          "Eaque et officia maxime. Iusto provident a vitae. In dolorem numquam. Pariatur est laudantium laborum nostrum architecto assumenda ea maxime. Quia perferendis qui ducimus saepe et sunt cum dolore amet. Quibusdam aliquam nam illum consectetur aut porro."
      },
      {
        comment_id: 218,
        votes: -3,
        created_at: "2017-04-23T12:02:53.034Z",
        author: "weegembump",
        body:
          "Iste laudantium explicabo nihil officia. Tempora voluptates amet exercitationem sed aut quo. Nostrum totam esse minus distinctio ipsum. Nisi debitis voluptatem rerum nisi qui."
      }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.commentsArray.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <h4>{comment.votes}</h4>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CommentsList;
