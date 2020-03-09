import React from 'react';
import { CardGroup, Card, Accordion, Button  } from 'react-bootstrap';
import ForumComments from '../ForumComments/ForumComments';

function ForumPosts(props) {
  console.log("lookkkkk")
  console.log(props.forumposts)
  return (
<CardGroup>
{ props.forumposts.map( post => {
 return (
   <div key={post.id} className="post-item">

  <Card style={{margin: "4px"}}>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        {post.caption}
      </Card.Text>
        <ForumComments />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>
)
})}
</CardGroup>
)
}

export default ForumPosts;
