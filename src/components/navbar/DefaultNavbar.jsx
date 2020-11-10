import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './DefaultNavbar.css'

const DefaultNavbar = () => {
 return (
  <>
   <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="nav-theme justify-content-between">
  <Navbar.Brand href="#home">Karina Hallberg</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#posts">Posts</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </>
 )
}

export default DefaultNavbar
