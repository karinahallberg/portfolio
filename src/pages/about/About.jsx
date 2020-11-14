import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile.webp";
import './About.css'
import Button from "react-bootstrap/Button";

const About = () => {
 return (
  <div id='about'>
   <div className="about">
   <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
   <Container>
    <Row className="pt-3 pb-5 align-items-center">
      {/* Profile picture */}
     <Col xs={12} md={6}>
      <Row className="justify-content-center mb-2 mr-2">
       <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
      </Row>
     </Col>
     {/* About me description */}
     <Col xs={12} md={6}>
      <Row className=" align-items-start p-2 my-details rounded">
       {/* description */}
       Hi! I am <strong>&nbsp;Karina Hallberg</strong>
                <br /> I work as a DevOps Engineer and on my spare time I like to write about how I learn different technologies, languages and really anything about development. I enjoy documenting as I learn them, I find it calming.
                <br />
                In the recent years I have been focusing on DevOps and most things around the subject. If you look it up you will soon understand that its an endless area and it merges soo many technologies it can at times be information overload. Well, since I enjoy documenting what I learn, my thoughts was that I share it with you. Hopefully you might find some of it useful.
                <br />I love learning about new technologies, as I am always striving to build quality and scalable products.
                <br /> <br />
      </Row>
      <Row>
        {/* buttons */}
        <Col className="d-flex justify-content-center flex-wrap">
         <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-success">
                        Let's talk
                      </Button>
                    </a>
                  </div>
         <div>
                    <a href="https://github.com/karinahallberg" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/karinahallberg/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
        </Col>
      </Row>
     </Col>
    </Row>
   </Container>
   </div>
  </div>
 )
}

export default About
