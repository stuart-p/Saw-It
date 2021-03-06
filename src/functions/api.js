import axios from "axios";

const baseURL = "https://sawit-server.herokuapp.com/api/";

export const fetchArticles = queries => {
  Object.keys(queries).forEach(query => {
    if (queries[query] === "") queries[query] = null;
  });
  return axios
    .get(baseURL + "articles", { params: { ...queries } })
    .then(res => {
      return res.data.articles;
    });
};

export const fetchSpecificArticle = article_id => {
  return axios.get(baseURL + `articles/${article_id}`).then(res => {
    return res.data.article;
  });
};

export const fetchTopics = () => {
  return axios
    .get("https://sawit-server.herokuapp.com/api/topics")
    .then(res => {
      return res.data.topics;
    });
};

export const fetchCommentsOnArticle = (article_id, queries) => {
  Object.keys(queries).forEach(query => {
    if (queries[query] === "") queries[query] = null;
  });
  return axios
    .get(baseURL + `articles/${article_id}/comments`, {
      params: { ...queries }
    })
    .then(res => {
      return res.data.comments;
    });
};

export const postCommentToArticle = (article_id, username, body) => {
  return axios
    .post(baseURL + `articles/${article_id}/comments`, { username, body })
    .then(res => {
      const postedComment = res.data.comment;
      delete postedComment.article_id;
      return postedComment;
    });
};

export const deleteCommentFromArticle = comment_id => {
  return axios.delete(baseURL + `comments/${comment_id}`).then(res => {});
};

export const modifyVotesOnElement = (patchRoute, voteChangeValue) => {
  return axios
    .patch(baseURL + patchRoute, { inc_votes: voteChangeValue })
    .then(res => {});
};

export const postArticleToTopic = (topic, author, title, body) => {
  return axios
    .post(baseURL + `articles`, { topic, author, title, body })
    .then(res => {
      const postedArticle = res.data.article;
      return postedArticle;
    });
};

export const removeArticleFromTopic = article_id => {
  return axios.delete(baseURL + `articles/${article_id}`).then(res => {});
};
