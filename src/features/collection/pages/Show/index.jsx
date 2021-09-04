import CollectionStorage from "features/collection/components/Storage";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./Show.scss";

Show.propTypes = {};

function Show(props) {
  return (
    <Container>
      <Link exact to="collection/add">
        <Button className="add-button" color="info">
          Add Pokemon
        </Button>
      </Link>
      <CollectionStorage></CollectionStorage>
    </Container>
  );
}

export default Show;
