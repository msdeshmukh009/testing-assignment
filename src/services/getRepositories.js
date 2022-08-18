import axios from "axios";

const getRepositories = url => {
  return axios.get(url);
};

export { getRepositories };
