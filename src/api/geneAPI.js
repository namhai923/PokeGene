import axiosClient from "./axiosClient";

let geneAPI = {
  genePokemon: (params) => {
    let url = `/randomPoke/`;
    return axiosClient.get(url, { params });
  },
};

export default geneAPI;
