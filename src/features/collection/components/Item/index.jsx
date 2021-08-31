import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";
import "./Item.scss";

Item.propTypes = {
  nickname: PropTypes.string,
  pokemon: PropTypes.object,
  handleRemove: PropTypes.func,
  handleEdit: PropTypes.func,
};

function Item(props) {
  let { nickname, pokemon, handleRemove, handleEdit } = props;
  return (
    <div className="photo">
      <img src={pokemon.image} alt={pokemon.name} />

      <div className="photo__overlay">
        <h3 className="photo__title">
          {nickname !== "" ? nickname : pokemon.name}
        </h3>

        <div className="photo__actions">
          <div>
            <Button
              outline
              size="sm"
              color="light"
              onClick={() => handleEdit(pokemon.name)}
            >
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => handleRemove(pokemon.name)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
