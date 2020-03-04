import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import App from '../App'
import ProjectsPage from './ProjectsPage'

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
    </div>
  )
}

export default HomePage
