import React, {useState} from 'react';
import './EditButton.css';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';
import EditProfile from '../EditProfile/EditProfile';
var FontAwesome = require('react-fontawesome');

function EditButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("CHECKING 1234");
  console.log(props.user);
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <EditProfile user={props.user} />
      </Modal>
    </>
  )
}

export default EditButton;
