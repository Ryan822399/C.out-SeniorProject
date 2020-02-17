import React from 'react';
import {Spinner, ListGroup,Container, Card, Button} from 'react-bootstrap';

function Posts(props) {
  return(
    <div>
      <ListGroup>
          { props.posts.map( post => {
           return (
             <div key={post.id} className="post-item">
                <ListGroup.Item>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={post.picture} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{post.caption}</Card.Subtitle>
                        <Card.Text>
                          {post.post}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
             </div>
           )
           })}


      </ListGroup>
    </div>
  )
}


export default Posts;
