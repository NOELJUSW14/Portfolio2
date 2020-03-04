import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ContactPage from './pages/ContactPage'
// import ProjectsPage from './pages/ProjectsPage'
import 'bootstrap/dist/css/bootstrap.css'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'

function NavbarDisplay() {
    return (
    <div>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
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
    </div>      
    );
  }
  
  export default NavbarDisplay;