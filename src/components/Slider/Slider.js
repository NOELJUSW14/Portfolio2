import React from 'react'
import '../Slider/slider.scss'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderItems: [
        {
          id: 0,
          title: 'Gallery',
          imgSrc: galleryImg,
        },
        {
          id: 1,
          title: 'LinkedIn',
          imgSrc: linkedinImg,
        },
        {
          id: 2,
          title: 'BootCamp Repo',
          imgSrc: bootcampImg,
        },
        {
          id: 3,
          title: 'M&M Consultants',
          imgSrc: mnmImg,
        },
        {
          id: 4,
          title: 'Upcoming Projects',
          imgSrc: comingImg,
        },
      ],
    }
  }
  slide = sliderItems => {
    return sliderItems.map((item, index) => {
      return (
        <div key={index} className="slide">
          {item}
        </div>
      );
    })
  }
  render() {
    return (
      <div className="slider">
        {}
      </div>
    ) 
  }
}

export default Slider
