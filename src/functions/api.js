import axios from "axios";

const baseURL = "https://sawit-server.herokuapp.com/api/";

export const fetchArticles = ({ topic }) => {
  return axios.get(baseURL + "articles", { params: { topic } }).then(res => {
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

export const fetchCommentsOnArticle = article_id => {
  return axios.get(baseURL + `articles/${article_id}/comments`).then(res => {
    return res.data.comments;
  });
};
