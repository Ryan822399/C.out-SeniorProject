import React, {Component} from "react";
import NewPost from '../NewPost/NewPost';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal, Row, Col, Card, CardGroup} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class RemoveFriendButton extends Component {
    state = {
      attributes: {
        userID: "1",
        friedID: ""
      }
    }

    inputChanged = event => {
      console.log(event.target.value)
      let att = this.state.attributes;
      att[event.target.name] = event.target.value;
      this.setState({attributes: att});
    }


  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.attributes);
    let form_data = new FormData();
    form_data.append('userID', this.state.attributes.userID);
    form_data.append('friedID', this.state.attributes.friedID);
    let url = {process.env.REACT_APP_API_URL} + '/api/friendships/{this.state.friedID}';

    axios.delete(url, {
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render(){
    return (
      <Form>
        <Form.Group controlId="formGroupFriedID">
          <Form.Control as="input" size="sm" name="friedID" type="friedID" placeholder="Enter Friend ID" value={this.state.friedID} onChange={this.inputChanged}/>
        </Form.Group>
        <Button onClick={this.handleFormSubmit} variant="dark" type="submit">
          Remove Friend
        </Button>
      </Form>
    );
  }
}

export default withCookies(RemoveFriendButton);
