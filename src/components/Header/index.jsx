import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import "./Header.scss";
import icon from "assets/images/pokemon_icon.png";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link exact to="/collection">
              <img className="header__logo" src={icon} alt="icon" />
            </Link>
          </Col>

          <Col xs="auto">
            <Link exact to="/collection/add">
              <Button className="header__button" type="button" color="primary">
                Add Pokemon
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
