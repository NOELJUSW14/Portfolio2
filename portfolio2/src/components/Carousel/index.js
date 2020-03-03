import React from 'react';
import Card from '../Card';
import linkedinImg from "../../images/Linkedin_Img3.png";
import bootcampImg from "../../images/UCF_Img.png";
import galleryImg from "../../images/IMG_1086.JPG";
import mnmImg from "../../images/mm_monogram_michael_spitz.png";
import comingImg from "../../images/coming-soon-placeholder.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Container, Button } from 'react-bootstrap'
import "../Carousel/style.css"
//import pics

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Gallery',
          imgSrc: galleryImg,
          link: 'filler.com',
          selected: false,
        },
        {
          id: 1,
          title: 'LinkedIn',
          imgSrc: linkedinImg,
          link: 'https://www.linkedin.com/in/matthewnoel14',
          selected: false,
        },
        {
          id: 2,
          title: 'BootCamp Repo',
          imgSrc: bootcampImg,
          link: 'https://github.com/NOELJUSW14',
          selected: false,
        },
        {
          id: 3,
          title: 'M&M Consultants',
          imgSrc: mnmImg,
          link: 'filler.com',
          selected: false,
        },
      ],
      
    }
  }
  
  cardClick = (id, card) => {
    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false
      }
    })
    this.setState({
      items,
    })
  }
  makeItem = (items) => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={this.cardClick}
          key={item.id}
        />
      )
    })
  }
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItem(this.state.items)}
        </Row>
        <hr/>
        <hr/>
        <hr/>
      </Container>
    )
  }
}

export default Carousel;
