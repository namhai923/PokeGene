import pokemonAPI from "api/pokemonAPI";
import SPECIAL_SEARCH from "assets/SPECIAL_SEARCH_NAME";

async function getImage(pokeName) {
  try {
    let data = await pokemonAPI.getPokemon(pokeName);
    let image = data["sprites"]["other"]["official-artwork"]["front_default"];
    return image;
  } catch (error) {
    throw error;
  }
}

async function getDescription(pokeName) {
  try {
    if (SPECIAL_SEARCH.includes(pokeName)) {
      pokeName = pokeName.split("-")[0];
    }
    let data = await pokemonAPI.getPokeSpecies(pokeName);
    let description = "";
    for (let line of data["flavor_text_entries"]) {
      if (
        line["version"]["name"] === "x" &&
        line["language"]["name"] === "en"
      ) {
        description = line["flavor_text"];
      }
    }
    if (description === "") {
      description = "Not available";
    }
    return description;
  } catch (error) {
    throw error;
  }
}

export { getImage, getDescription };
