import { removePokemon } from "features/collection/collectionSlice";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Item from "../Item";
import "./Storage.scss";

CollectionStorage.propTypes = {};

function CollectionStorage(props) {
  let pokeCollection = useSelector((state) => state.collection, shallowEqual);
  let dispatch = useDispatch();
  let redirect = useHistory();

  let handleRemove = (pokeName) => {
    let remove = removePokemon(pokeName);
    dispatch(remove);
  };

  let handleEdit = (pokeName) => {
    let editUrl = `/collection/${pokeName}`;
    redirect.push(editUrl);
  };

  return (
    <Container className="grid">
      {pokeCollection.map((item) => {
        return (
          <Item
            key={item.pokemon.name}
            {...item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </Container>
  );
}

export default CollectionStorage;
