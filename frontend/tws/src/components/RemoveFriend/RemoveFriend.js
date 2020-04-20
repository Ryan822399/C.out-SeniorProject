import React,{useState, useRef, Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
import axios from 'axios';
import RemoveFriendButton from '../RemoveFriendButton/RemoveFriendButton'

function RemoveFriend(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="dark" block onClick={handleShow}>
        Remove Friend
      </Button>

      <Modal show={show} onHide={handleClose}>
        <RemoveFriendButton/>
      </Modal>
    </>
  )
}

export default RemoveFriend;
