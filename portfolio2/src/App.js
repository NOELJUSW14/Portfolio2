import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
//import Slider from "./components/Slider";
import 'bootstrap/dist/css/bootstrap.css';
import "./../src/App.css"

import {
  Jumbotron,
  Container,
  Navbar,
  Nav,
  Row,
  Image,
} from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Matthew Noel',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: "My Portfolio",
      },
      about: {
        title: "About Me",
      },
      projects: {
        title: "Check out my projects below",
      },
      contact: {
        title: "Keep in touch!",
      },
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Container className="p-0" fluid>
            <Jumbotron  className="jumbo" bg="light" variant="light" fluid={true}>
            </Jumbotron>
            <Navbar className="border-bottom nav" bg="blue" expand="lg">
              <Navbar.Brand>Matthew Noel</Navbar.Brand>

              <Navbar.Toggle
                className="border-0"
                aria-controls="navbar-toggle"
              />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
            <Route path="/about"  render={() => <AboutPage title={this.state.about.title} />} />
            <Route path="/projects"  render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />


            <Footer />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
