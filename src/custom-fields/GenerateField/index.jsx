import pokeball from "assets/images/pokeball.png";
import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { FormFeedback, FormGroup } from "reactstrap";
import Generate from "./Generate";
import geneAPI from "api/geneAPI";

GenerateField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  editMode: PropTypes.bool,
};

function GenerateField(props) {
  let { field, form, editMode } = props;
  let { name } = field;
  let { errors, touched } = form;
  let showError = errors[name] && touched[name];
  let [{ value: selectedTypes }] = useField("types");
  let [{ value: nickname }] = useField("nickname");
  let [{ value: pokemon }] = useField("pokemon");
  let [image, setImage] = useState(() => {
    if (pokemon) {
      return pokemon.image;
    }
    return pokeball;
  });
  let [description, setDescription] = useState(() => {
    if (pokemon) {
      return pokemon.description;
    }
    return "Pokemon's description";
  });
  let [title, setTitle] = useState(() => {
    if (pokemon) {
      return pokemon.name;
    }
    return "Pokemon's name";
  });
  let [generating, setGenerating] = useState(false);
  let [generateMessage, setGenerateMessage] = useState("");

  useEffect(() => {
    if (title.localeCompare("Pokemon's name") !== 0) {
      form.setFieldValue(name, { name: title, image, description });
    }
  }, [title, image, description]);

  async function handleClick() {
    try {
      if (selectedTypes.length === 0) {
        setGenerateMessage("Please add types for your pokemon");
      } else {
        setGenerateMessage("");
        setGenerating(true);
        selectedTypes = selectedTypes.map((type) => type.value);
        let params = {
          types: selectedTypes,
        };
        let myPokemon = await geneAPI.genePokemon(params);
        if (!myPokemon.name) {
          setGenerateMessage("There is no Pokemon available");
        } else {
          setImage(myPokemon.image);
          setDescription(myPokemon.description);
          setTitle(
            myPokemon.name.charAt(0).toUpperCase() + myPokemon.name.slice(1)
          );
        }
        setGenerating(false);
      }
    } catch (error) {
      console.log("Pokemons are going crazy", error);
    }
  }

  return (
    <FormGroup>
      <Generate
        {...field}
        imageURL={image}
        title={title}
        description={description}
        handleClick={handleClick}
        nickname={nickname}
        isGenerating={generating}
        generateMessage={generateMessage}
        editMode={editMode}
      />

      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default GenerateField;
