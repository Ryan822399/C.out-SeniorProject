import React, {useState, useEffect} from 'react';
import {Form, Modal, Row, Col, Image, FormControl, CardGroup, Card, Accordion, Button, InputGroup  } from 'react-bootstrap';
import ForumComments from '../ForumComments/ForumComments';
import image from './familyguy.jpg'
var FontAwesome = require('react-fontawesome');

function ForumPosts(props) {

  const [show, setShow] = useState(false);
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
      <span style={{marginLeft: "2px"}}> {post.curr_username}</span>
        <small className="text-muted" style={{marginLeft: "7px"}}>Posted on {post.date}</small>
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
      <FontAwesome name="comment-alt" onClick={() => { setShow(true); props.updateCommId(post.id); }}
                          style={{fontSize: "1rem", marginTop: "14px"}} />
      <small onClick={() => {setShow(true); props.updateCommId(post.id); }} className="text-muted" style={{marginLeft: "7px"}}>Comments</small>
    </Card.Footer>
  </Card>

  <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" >
            {post.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {post.caption}
          </p>
          <InputGroup className="mb-3">

          <Form>
            <Form.Group controlId="formGroupTitle">
              <Form.Control as="input" size="sm" name="description" type="title" placeholder="Respond here"  onChange={props.updateCommDesc}/>
            </Form.Group>
          </Form>
          <InputGroup.Append>
            <Button onClick={props.commentFormSubmitted} style={{height: "31px"}} variant="primary">Submit</Button>
          </InputGroup.Append>
        </InputGroup>
          <h3 style={{border: "solid", borderTop: "3px #fff"}}>hello</h3>
          <h3 style={{border: "solid", borderTop: "3px #fff"}}>hello</h3>
        </Modal.Body>
      </Modal>


  </div>
)
})}
</CardGroup>
)
}

export default ForumPosts;
