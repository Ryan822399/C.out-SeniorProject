import React,{useState, useRef, Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
import axios from 'axios';
import NewPostCommentButton from '../NewPostCommentButton/NewPostCommentButton'

function NewFeedComment(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="secondary" block onClick={handleShow}>
        Create a Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <NewPostCommentButton/>
      </Modal>
    </>
  )
}

export default NewFeedComment;
