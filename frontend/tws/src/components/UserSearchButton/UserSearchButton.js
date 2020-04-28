import React, {useState, useRef,Component} from "react";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal, Row, Col, Card, CardGroup, Media, Carousel} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import axios from 'axios';

class UserSearchButton extends Component {
  state = {
    info: [],
    attributes: {
      userName: ""
    }
  }
  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({info: res}))
    .catch(error => console.log(error))
    console.log("Info");
    console.log(this.state.info);
  }

  inputChanged = event => {
    console.log(event.target.value)
    let att = this.state.attributes;
    att[event.target.name] = event.target.value;
    this.setState({attributes: att});
  };

handleSubmit = event => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  event.preventDefault()
  console.log(this.state.attributes);
  return(
    <Modal show={show} onHide={handleClose}>
    <Modal.Body >
      <p>Text</p>
    </Modal.Body>
    </Modal>
  )
};

render(){
  console.log("UserName")
  console.log(this.userName);
  return (
      <Form>
        <Form.Group controlId="formGroupUserSearch">
          <Form.Control as="input" size="sm" name="userName" type="userName" placeholder="Enter a User Name" value={this.state.userName} onChange={this.inputChanged}/>
        </Form.Group>
        <Button onClick={this.handleFormSubmit} variant="dark" type="submit">
          Submit
        </Button>
      </Form>
  );
}
}
export default withCookies(UserSearchButton);
