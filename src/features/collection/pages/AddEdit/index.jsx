import { addPokemon, updatePokemon } from "features/collection/collectionSlice";
import CollectionForm from "features/collection/components/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";

AddEdit.propTypes = {};

function AddEdit(props) {
  let redirect = useHistory();
  let dispatch = useDispatch();
  let { pokemonName } = useParams();
  let editMode = pokemonName !== undefined;
  let pokemonInfo = useSelector((state) =>
    state.collection.find((item) => item.pokemon.name === pokemonName)
  );

  let initialValues = editMode
    ? pokemonInfo
    : {
        nickname: "",
        types: [],
        pokemon: null,
      };

  let handleSubmit = (values, editMode) => {
    let action;
    if (editMode) {
      action = updatePokemon(values);
    } else {
      action = addPokemon(values);
    }
    dispatch(action);
    redirect.push("/collection");
  };

  return (
    <Container>
      <CollectionForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        editMode={editMode}
      />
    </Container>
  );
}

export default AddEdit;
