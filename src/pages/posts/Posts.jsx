import React from 'react';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Posts.css'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

   let picsum = [ 
"https://picsum.photos/300/200?random=1",
"https://picsum.photos/300/200?random=2",
"https://picsum.photos/300/200?random=3",
"https://picsum.photos/300/200?random=4",
"https://picsum.photos/300/200?random=5",
"https://picsum.photos/300/200?random=6"
];  

  return (
    <div id="posts">
    <div className="Article">
      <h1 className="pt-3 text-center font-details pb-3">ARTICLES</h1>
   </div>
      <CardDeck>
        <Row className="d-flex justify-content-around">
      {posts.map((post, index) => (
          <Col md={4}>
            <Card  key={post.id} className="focus mt-2 mb-2">
              
              <Card.Img variant="top" src={picsum[index]} />
              
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