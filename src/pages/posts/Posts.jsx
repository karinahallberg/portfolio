import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Posts.css'

let urls = [
  "https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471__340.jpg",
  "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537__340.jpg",
  "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822__340.jpg",
  "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327__180.jpg",
  "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327__180.jpg",
  "https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327__180.jpg"
];

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div id="posts">
    <div className="Article">
      <h1 className="pt-3 text-center font-details pb-3">ARTICLES</h1>
   </div>
      <CardDeck>
        <Row className="d-flex justify-content-around">
      {posts.map(post => (
          <Col md={4}>
            <Card  key={post.id} className="focus mt-2 mb-2">
              
              <Card.Img variant="top" src="https://picsum.photos/300/200?grayscale" />
              
              <Card.Body>
                <Card.Title className="card-title">{post.title}</Card.Title>
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {post.body}
                </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">{post.id}</small>
      
    </Card.Footer>
        </Card>
      </Col>
              
      ))}
      </Row>
      </CardDeck>
    </div>
  );
};

export default Posts;