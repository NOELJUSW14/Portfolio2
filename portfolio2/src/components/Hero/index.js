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
    <Jumbotron bg="light" variant="light">
      <Container fluid>
      <Row className="justify-content-center">
        <Col md="auto">
            {props.title && <h2 className="display-4 font-weight-bolder">{props.title}</h2>}
            {props.subTitle && <h3 className="display-6 font-weight-bolder">{props.subTitle}</h3>}
            {props.text && <h3 className="display-8 font-weight-bolder">{props.text}</h3>}
        </Col>
      </Row>
    </Container>
    </Jumbotron>
  );
}

export default Hero;
