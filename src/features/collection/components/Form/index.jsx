import TYPES from "assets/TYPES";
import GenerateField from "custom-fields/GenerateField";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, Col } from "reactstrap";
import * as Yup from "yup";
import "./Form.scss";

CollectionForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  editMode: PropTypes.bool,
};

function CollectionForm(props) {
  let { handleSubmit, initialValues, editMode } = props;

  let validation = Yup.object().shape({
    pokemon: Yup.object().required("You need a pokemon").nullable(),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values, editMode)}
      validationSchema={validation}
    >
      {(formikProps) => {
        return (
          <Col sm={6}>
            <Form>
              <FastField
                name="nickname"
                component={InputField}
                label="Nickname"
                placeholder="--Give your pokemon a nickname--"
              />

              <FastField
                name="types"
                component={SelectField}
                options={TYPES}
                label="Types"
                placeholder="--Choose types for your pokemon--"
                editMode={editMode}
              />

              <br />
              <Col sm={8}>
                <FastField
                  name="pokemon"
                  component={GenerateField}
                  editMode={editMode}
                />
              </Col>

              <Button className="submit-btn" type="submit" color="info">
                Catch It !
              </Button>
            </Form>
          </Col>
        );
      }}
    </Formik>
  );
}

export default CollectionForm;
