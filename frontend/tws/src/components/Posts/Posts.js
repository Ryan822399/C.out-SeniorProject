import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';

function Posts(props) {
  return(
    <div>
        { props.posts.map( post => {
           return (
             <div key={post.id} className="post-item">
<<<<<<< HEAD
                  <Card style={{ padding: '40px', border: '3px solid black', margin: 'auto', width: '20rem' }}>
=======
                    <Card bg="white" text="white" style={{ padding: '40px', border: '3px solid black', margin: 'auto', width: '40rem' }}>
                    <Card.Header><h2>Ryan Hennes</h2></Card.Header>
>>>>>>> 62446b4d13c89e813645377996bb33cf3e188fa3
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
