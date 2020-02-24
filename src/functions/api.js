import axios from "axios";

const baseURL = "https://sawit-server.herokuapp.com/api/";

export const fetchArticles = ({ topic }) => {
  return axios.get(baseURL + "articles", { params: { topic } }).then(res => {
    return res.data.articles;
  });
};

export const fetchTopics = () => {
  return axios
    .get("https://sawit-server.herokuapp.com/api/topics")
    .then(res => {
      return res.data.topics;
    });
};
