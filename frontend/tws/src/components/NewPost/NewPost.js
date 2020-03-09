import React,{useState, useRef, Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
import axios from 'axios';
import PostButton from '../PostButton/PostButton'

function NewPost(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="secondary" block onClick={handleShow}>
        Create a Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <PostButton/>
      </Modal>
    </>
  )
}

export default NewPost;
