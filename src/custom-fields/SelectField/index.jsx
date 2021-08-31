import React from "react";
import { FormGroup, Label } from "reactstrap";
import CustomSelect from "./Select";
import PropTypes from "prop-types";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  editMode: PropTypes.bool,
};

function SelectField(props) {
  let { field, form, label, options, placeholder, editMode } = props;
  let { name } = field;

  let handleChange = (selectedOptions) => {
    if (selectedOptions.length > 2) {
      return;
    }
    form.setFieldValue(name, selectedOptions);
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <CustomSelect
        id={name}
        {...field}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        editMode={editMode}
      />
    </FormGroup>
  );
}

export default SelectField;
