import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class EditProfile extends Component {

  change = evt => {

  }

  render() {
    console.log("CHECKING");
    console.log(this.props.user[0].userName);
    let firstName;
    if (this.props.user[0] !== "") {
      firstName = "this.props.user[0].firstName;";
    }
    return (
      <div style={{background: "#222", padding: "5%"}}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="firstName" placeholder={firstName} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="lastName" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Bio</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Location</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Picture</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Button variant="dark" type="submit" onClick={this.change}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditProfile;
