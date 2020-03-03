import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {
  Container,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap'
import "./style.css";

function Hero(props) {
  return (
    <Jumbotron className="jumbotron" bg="light" variant="light">
      <Container fluid>
      <Row className="justify-content-center">
            {props.title && <h2 className="display-6 font-weight-bolder">{props.title}</h2>}
      </Row>
    </Container>
    </Jumbotron>
  );
}

export default Hero;
