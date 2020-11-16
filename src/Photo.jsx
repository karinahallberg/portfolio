import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Photo = (props) => {
 return (
  
    <div id="props">
    <div className="Article">
      <h1 className="pt-3 text-center font-details pb-3">DOGS</h1>
   </div>
      <CardDeck>
        <Row className="d-flex justify-content-around">
      
          <Col md={4}>
            <Card  key={props.id} className="focus mt-2 mb-2">
              <Card.Img variant="top" src={props.url} alt="dog image placeholder"/>
              <Card.Body>
                <Card.Title className="card-title">{props.name}</Card.Title>
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {props.width}
                </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">{props.id}</small>
      
    </Card.Footer>
        </Card>
      </Col>
           </Row>
      </CardDeck>
    </div>
 )
}

export default Photo
