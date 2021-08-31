import CollectionStorage from "features/collection/components/Storage";
import React from "react";
import { Container } from "reactstrap";

Show.propTypes = {};

function Show(props) {
  return (
    <Container>
      <CollectionStorage></CollectionStorage>
    </Container>
  );
}

export default Show;
