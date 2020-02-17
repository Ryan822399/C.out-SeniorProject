import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';

function Posts(props) {
  return(
    <div>
          { props.posts.map( post => {
           return (
             <div key={post.id} className="post-item">
                    <Card bg="white" text="white" style={{ padding: '40px', border: '3px solid black', margin: 'auto', width: '40rem' }}>
                    <Card.Header><h2>Ryan Hennes</h2></Card.Header>
                    <Card.Img variant="top" src={post.picture} />
                    <Card.Body>
                        <Card.Title>Test</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.caption}</Card.Subtitle>
                        <Card.Text>
                          {post.post}
                        </Card.Text>
                    </Card.Body>
                  </Card>
             </div>
           )
           })}
    </div>
  )
}


export default Posts;
