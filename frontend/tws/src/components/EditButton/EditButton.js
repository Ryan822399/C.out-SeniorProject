import React from 'react';
import './EditButton.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import EditProfile from '../EditProfile/EditProfile';
var FontAwesome = require('react-fontawesome');

function EditButton(props) {
  return (
    <form>
      <ButtonToolbar>
        <Button onClick={<EditProfile />} className="edit" variant="primary" size="lg" active>
          Edit
        </Button>
      </ButtonToolbar>
    </form>
  )
}

export default EditButton;
