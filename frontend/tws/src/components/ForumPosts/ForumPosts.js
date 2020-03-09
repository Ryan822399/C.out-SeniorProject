import React from 'react';
import { CardGroup, Card  } from 'react-bootstrap';

function ForumPosts(props) {
  return (
<CardGroup>
{ props.forumposts.map( post => {
 return (
   <div key={post.id} className="post-item">

  <Card>
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        {post.caption}
      </Card.Text>
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
