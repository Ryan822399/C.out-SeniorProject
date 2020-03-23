import React,{useState, useRef, Component} from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
import axios from 'axios';
import AddFriendButton from '../AddFriendButton/AddFriendButton'

function AddFriend(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button variant="dark" block onClick={handleShow}>
        Add a Friend
      </Button>

      <Modal show={show} onHide={handleClose}>
        <AddFriendButton/>
      </Modal>
    </>
  )
}

export default AddFriend;
