import axiosClient from "./axiosClient";

let pokemonAPI = {
  getType: (type) => {
    let url = `/type/${type}`;
    return axiosClient.get(url);
  },

  getPokemon: (name) => {
    let url = `/pokemon/${name}`;
    return axiosClient.get(url);
  },

  getPokeSpecies: (name) => {
    let url = `/pokemon-species/${name}`;
    return axiosClient.get(url);
  },
};

export default pokemonAPI;
