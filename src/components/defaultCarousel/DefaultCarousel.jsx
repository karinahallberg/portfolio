import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './DefaultCarousel.css'
import ScrollDown from "../scroll-down/ScrollDown";
import PersonalTitleMessage from '../title-message/PersonalTitleMessage';

const DefaultCarousel = () => {
 return (
  <div id="home">
    <PersonalTitleMessage/>
   <Carousel controls={false} indicators interval={2500} pause={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src="https://picsum.photos/id/0/5616/3744?grayscale"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src="https://picsum.photos/id/180/2400/1600?grayscale"
      alt="Second slide"
    />
  </Carousel.Item>  
</Carousel>
<ScrollDown/>
  </div>
 )
}

export default DefaultCarousel
