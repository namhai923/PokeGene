import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  FormFeedback,
} from "reactstrap";
import Loader from "components/Loader";

Generate.propTypes = {
  handleClick: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  nickname: PropTypes.string,
  isGenerating: PropTypes.bool,
  generateMessage: PropTypes.string,
  editMode: PropTypes.bool,
};

function Generate(props) {
  let {
    handleClick,
    imageURL,
    description,
    title,
    nickname,
    isGenerating,
    generateMessage,
    editMode,
  } = props;
  return (
    <div>
      <Card>
        {isGenerating ? (
          <Loader />
        ) : (
          <>
            <Col sm={6}>
              <CardImg top width="100%" src={imageURL} alt="Card image cap" />
            </Col>

            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {nickname ? nickname : "nickname"}
              </CardSubtitle>
              <CardText>{description}</CardText>
            </CardBody>
          </>
        )}
        <CardBody>
          <Button type="button" onClick={handleClick} disabled={editMode}>
            Generate
          </Button>
          <div className={generateMessage !== "" ? "is-invalid" : ""}></div>
          {generateMessage && <FormFeedback>{generateMessage}</FormFeedback>}
        </CardBody>
      </Card>
    </div>
  );
}

export default Generate;
