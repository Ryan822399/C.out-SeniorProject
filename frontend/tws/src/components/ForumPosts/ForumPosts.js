import React, {useState, useEffect} from 'react';
import { Row, Col, Image, CardGroup, Card, Accordion, Button  } from 'react-bootstrap';
import ForumComments from '../ForumComments/ForumComments';
import image from './familyguy.jpg'

function ForumPosts(props) {


  return (

<CardGroup>
{ props.forumposts.map( post => {


 return (
   <div key={post.id} className="post-item">

  <Card style={{margin: "4px"}}>
  <Card.Header>
    <Row>
      <Col >

        <Image src={`${process.env.REACT_APP_MEDIA_API_URL}/${post.curr_userpicture}/`} width="40" height="40" roundedCircle fluid />

      </Col>
      <span style={{marginRight: "5px"}}> {post.curr_username}</span>
      <Col>

      </Col>
    </Row>
  </Card.Header>
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
