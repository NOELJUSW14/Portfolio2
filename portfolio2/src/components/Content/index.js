import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Col} from 'react-bootstrap'

function Content(props) {
  return (
    <Container fluid={true}> 
      <Row className="justify-content-center">
        <Col md={8}>
        {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default Content;
