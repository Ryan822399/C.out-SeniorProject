import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class EditProfile extends Component {

  state = {
    editedProfile: this.props.user[0],
    /*
    profile: {
      userName: "",
      firstName: "",
      lastName: "",
      bio: "",
      location: "",
      email: "",
      dob: "",
      id: 0,
      user: 0
    }
    */
  }

  change = evt => {
    console.log("EVENT TARGET");
    console.log(evt.target);

    /*
    this.setState({profile.userName: this.props.user[0].userName});
    this.setState({profile.firstName: evt.target.firstName})
    this.setState({profile.lastName: evt.target.lastName})
    this.setState({profile.bio: evt.target.bio})
    this.setState({profile.location: evt.target.location})
    this.setState({profile.email: this.props.user[0].email})
    this.setState({profile.dob: this.props.user[0].dob})
    this.setState({profile.id: this.props.user[0].id})
    this.setState({profile.user: this.props.user[0].user})
    */

    let profile = this.state.editedProfile;
    profile[evt.target.name] = evt.target.value;
    this.setState({editedProfile: profile});
  }

  update = evt => {
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: "Diaz 48",
        firstName: "Anthony",
        lastName: "Diaz",
        bio: "Fuck everything",
        location: "Hell",
        email: "bitch@bitch.com",
        dob: "1997-05-28",
        id: 7,
        user: 3
      })
    }).then( resp => resp.json())
    .then( res => console.log("UPDATING TO DATABASE"))
    .catch(error => console.log(error))
  }

  submit = evt => {
    console.log("CHECKING SUBMIT")
    console.log(this.state.editedProfile);
  }

  render() {
    console.log("CHECKING");
    console.log(this.props.user[0].userName);
    let firstName, lastName, password, bio, location, picture;
    if (this.props.user[0] !== "") {
      firstName = this.props.user[0].firstName;;
      lastName = this.props.user[0].lastName;
      bio = this.props.user[0].bio;
      location = this.props.user[0].location;
      picture = this.props.user[0].picture;
    }
    return (
      <div style={{background: "#222", padding: "5%"}}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control name="firstName" type="firstName" placeholder={firstName} onChange={this.change}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control name="lastName" type="lastName" placeholder={lastName} onChange={this.change}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="email" type="password" placeholder="" onChange={this.change}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control name="bio" placeholder={bio} onChange={this.change}/>
          </Form.Group>

          <Form.Group controlId="formGridLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" placeholder={location} onChange={this.change}/>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPicture">
              <Form.Label>Picture</Form.Label>
              <Form.Control placeholder={picture}/>
            </Form.Group>
          </Form.Row>

          <Button variant="dark" type="submit" onClick={this.submit, this.update}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default EditProfile;
