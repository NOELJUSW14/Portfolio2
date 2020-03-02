import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {
  Jumbotron,
  Container,
  Carousel,
  Image,
} from 'react-bootstrap'
import "./style.css";

function Header() {
  return (
    <Jumbotron fluid>
        <Carousel>
      <Carousel.Item>
        <Image src="" fluid />
      </Carousel.Item>
    </Carousel>
  </Jumbotron>
  );
}

export default Header;