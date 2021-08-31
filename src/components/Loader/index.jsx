import React from "react";
import { Spinner } from "reactstrap";

Loader.propTypes = {};

function Loader(props) {
  return (
    <div>
      <Spinner type="grow" color="primary" children="" />
    </div>
  );
}

export default Loader;
