import PropTypes from "prop-types";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
};

function InputField(props) {
  let { field, label, placeholder } = props;
  let { name } = field;

  return (
    <FormGroup>
      <Col>
        <Label for={name}>{label}</Label>
        <Input type="text" id={name} placeholder={placeholder} {...field} />
      </Col>
    </FormGroup>
  );
}

export default InputField;
