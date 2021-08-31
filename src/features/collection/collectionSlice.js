import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

export let collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (
        !state.some((item) => item.pokemon.name === action.payload.pokemon.name)
      ) {
        state.push(action.payload);
      }
    },
    removePokemon: (state, action) => {
      state = state.filter((item) => item.pokemon.name !== action.payload);
      return state;
    },
    updatePokemon: (state, action) => {
      let index = state.findIndex((item) => {
        return item.pokemon.name === action.payload.pokemon.name;
      });
      state[index] = action.payload;
    },
  },
});

let { reducer, actions } = collectionSlice;
export let { addPokemon, removePokemon, updatePokemon } = actions;
export default reducer;
