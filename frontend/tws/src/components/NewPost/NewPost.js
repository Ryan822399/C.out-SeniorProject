import React,{useState, useRef, Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';

function NewPost(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="primary" onClick={handleShow}>
        Create a Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="Post Title">
              <Form.Label>Post Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="Post Text">
              <Form.Label>Post Caption</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NewPost;
