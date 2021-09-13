import axios from "axios";
import queryString from "query-string";

let axiosClient = axios.create({
  baseURL: process.env.REACT_APP_GENEAPI,
  headers: {
    "content-type": "application/json",
  },
  paramSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
