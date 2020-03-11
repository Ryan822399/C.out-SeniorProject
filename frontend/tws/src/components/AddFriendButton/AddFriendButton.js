import React, {Component} from "react";
import NewPost from '../NewPost/NewPost';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal, Row, Col, Card, CardGroup} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class AddFriendButton extends Component {
    state = {
      attributes: {
        userName: "",
        firstName: "",
        lastName: "",
        picture: null,
      }
    }

    inputChanged = event => {
      console.log(event.target.value)
      let att = this.state.attributes;
      att[event.target.name] = event.target.value;
      this.setState({attributes: att});
    }

    handleImageChange = event => {
      let att = this.state.attributes;
      att[event.target.name] = event.target.files[0];
      this.setState({attributes: att});
    };

  handleFormSubmit = event => {
    event.preventDefault()
    console.log(this.state.attributes);
    let form_data = new FormData();
    form_data.append('userName', this.state.attributes.userName);
    form_data.append('firstName', this.state.attributes.firstName);
    form_data.append('lastName', this.state.attributes.lastName);
    form_data.append('picture', this.state.attributes.picture);
    let url = 'http://localhost:8000/api/friendslist/';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };
  AddFriend = evt => {

  }
  render(){
    return (
        <Form>
          <Form.Group controlId="formGroupUserName">
            <Form.Control as="input" size="sm" name="userName" type="userName" placeholder="Enter User Name" value={this.state.userName} onChange={this.inputChanged}/>
          </Form.Group>
          <Form.Group controlId="formGroupFirstName">
            <Form.Control size="sm" name="firstName" type="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.inputChanged}/>
          </Form.Group>
          <Form.Group controlId="formGroupLastName">
            <Form.Control size="sm" name="lastName" type="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.inputChanged}/>
          </Form.Group>
          <input type="file"
                   id="picture"
                   name="picture"
                   accept="image/png, image/jpeg, image/JPG"  onChange={this.handleImageChange} required/>
          <Button onClick={this.handleFormSubmit} variant="outline-success" type="submit" block>
            Add Friend
          </Button>
          <Button variant="outline-success" type="submit" block>
            Remove Friend
          </Button>
        </Form>
    );
  }
}

export default withCookies(AddFriendButton);
