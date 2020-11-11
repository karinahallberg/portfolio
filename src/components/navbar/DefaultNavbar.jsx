import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './DefaultNavbar.css'

const DefaultNavbar = () => {
 return (
  <body>
   <Navbar fixed="top" collapseOnSelect expand="md" variant="light" className="nav-theme justify-content-between">
  <Navbar.Brand className="nav-brandtitle" href="#home">Karina Hallberg</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="nav-linktitle" href="#home">Home</Nav.Link>
      <Nav.Link className="nav-linktitle" href="#posts">Posts</Nav.Link>
      <Nav.Link className="nav-linktitle" href="#about">About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </body>
 )
}

export default DefaultNavbar
