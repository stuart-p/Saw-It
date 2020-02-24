import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://sawit-server.herokuapp.com/api/articles")
    .then(res => {
      return res.data.articles;
    });
};
