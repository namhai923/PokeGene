import chroma from "chroma-js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

CustomSelect.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
  editMode: PropTypes.bool,
};

function CustomSelect(props) {
  let { value, editMode } = props;

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <Select
      isMulti
      styles={colourStyles}
      isSearchable
      defaultMenuIsOpen={false}
      closeMenuOnSelect={value.length === 2}
      {...props}
      isDisabled={editMode}
    />
  );
}

export default CustomSelect;
