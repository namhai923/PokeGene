import pokemonAPI from "api/pokemonAPI";
import SPECIAL_NAMES from "assets/SPECIAL_NAMES";

async function getPokemons(types) {
  try {
    let pokemons = Promise.all(
      types.map(async (type) => {
        let data = await pokemonAPI.getType(type);
        let { pokemon: pokeList } = data;
        return pokeList
          .map((pokemon) => pokemon.pokemon.name)
          .filter(
            (name) => !name.includes("-") || SPECIAL_NAMES.includes(name)
          );
      })
    );
    return pokemons;
  } catch (error) {
    throw error;
  }
}

function intersectPokes(pokeArr) {
  return pokeArr.reduce((previous, current) =>
    previous.filter((pokemon) => current.includes(pokemon))
  );
}

async function randomPokemon(selectedTypes) {
  try {
    selectedTypes = selectedTypes.map((type) => type.value);
    let ftrPokes = await getPokemons(selectedTypes);
    if (selectedTypes.length === 2) {
      ftrPokes = intersectPokes(ftrPokes);
    } else {
      ftrPokes = ftrPokes[0];
    }
    if (ftrPokes.length === 0) {
      return null;
    }
    let myPokemon = ftrPokes[Math.trunc(Math.random() * ftrPokes.length)];
    return myPokemon;
  } catch (error) {
    throw error;
  }
}

export default randomPokemon;
