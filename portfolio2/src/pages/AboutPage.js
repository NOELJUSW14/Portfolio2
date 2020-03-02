import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
import ProjectsPage from './ProjectsPage'

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          My first job was as prep cook at a local golf club, while I was a
          freshman at Daytona State College. Who would have guessed that the
          lessons I will go on to learn would take me so far.
        </p>
        <p>
          For a year I trained in culinary fundamentals like “mise en place”-
          the art of preperation, metric conversions, time management and
          attention to detail.
        </p>
        <p>
          It was an amazing time to be open minded and naive. I soon gave up my
          spatula and knife for inventory management softwares and a MacBook
        </p>
        <p>
          Im inspired by the sucess of programmers like Bill Gates and Mark
          Zuckerberg but haven't traded in my culinary heros like Masaharu
          Morimoto and the late Anthony Bourdain
        </p>
        <p>
          My fire and desire to create is still burning hot. I just found a
          different kitchen to cook in.
        </p>
      </Content>
    </div>
  )
}

export default AboutPage
