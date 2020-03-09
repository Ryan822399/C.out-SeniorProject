import React, {Component} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { withCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');

class EditProfile extends Component {

  state = {
    editedProfile: this.props.user[0],
    userName: this.props.user[0].userName,
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: this.props.user[0].email,
    dob: this.props.user[0].dob,
    user: this.props.user[0].user,
    heightFeet: this.props.user[0].heightFeet,
    heightInches: this.props.user[0].heightInches
    /*
    profile: {
      userName: this.props.user[0].userName,
      firstName: "",
      lastName: "",
      password: "",
      bio: "",
      location: "",
      email: this.props.user[0].email,
      dob: this.props.user[0].dob,
      id: this.props.user[0].id,
      user: this.props.user[0].user
    }
    */

  }
  change = val => evt => {
    console.log("EVENT TARGET");
    console.log(evt.target.value);
    if(val == "firstName") {
      this.setState({firstName: evt.target.value});
    }
    else if(val == "lastName") {
      this.setState({lastName: evt.target.value});
    }
    else if(val == "bio") {
      this.setState({bio: evt.target.value});
    }
    else if(val == "location") {
      this.setState({location: evt.target.value});
      console.log(evt.target.value);
    }
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.bio);
    console.log(this.state.location);
  }
/*
  change = val => evt => {
    console.log("EVENT TARGET");
    console.log(evt.target.value);
    if(val == "firstName") {
      this.setState({profile: {userName: this.state.editedProfile.userName, firstName: evt.target.value, email: this.state.editedProifle.email, dob: this.state.editedProfile.dob, id: this.state.editedProfile.id, user: this.state.editedProfile.user}});
    }
    else if(val == "lastName") {
      this.setState({profile: {lastName: evt.target.value}});
    }
    else if(val == "password") {
      this.setState({profile: {password: evt.target.value}});
    }
    else if(val == "bio") {
      this.setState({profile: {bio: evt.target.value}});
    }
    else if(val == "location") {
      this.setState({profile: {location: evt.target.value}});
    }
    console.log("NEW PROFILE");
    console.log(this.state.profile);
  }
  */


  update = evt => {
    let profile = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bio: this.state.bio,
      location: this.state.location,
      email: this.state.email,
      dob: this.state.dob,
      user: this.props.cookies.get('tws-id'),
      heightFeet: this.state.heightFeet,
      heightInches: this.state.heightInches
    }
    console.log("TESTING PROFILE");
    console.log(profile);
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/${profile.user}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    }).then( resp => resp.json())
    .then( res => console.log(res))
    .catch(error => console.log(error))
    console.log(this.state.token);
    console.log(profile.userName);
    console.log(profile.firstName);
    console.log(profile.lastName);
    console.log(profile.bio);
    console.log(profile.location);
    console.log(profile.email);
    console.log(profile.dob);
    console.log(profile.user);
    console.log(profile.heightFeet);
    console.log(profile.heightInches);
  }

  submit = evt => {
    console.log("CHECKING SUBMIT")
    console.log(this.state.editedProfile);
  }

  render() {
    console.log("CHECKING");
    console.log(this.state.userName);
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
              <Form.Control name="firstName" type="firstName" placeholder={firstName} onChange={this.change("firstName")}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control name="lastName" type="lastName" placeholder={lastName} onChange={this.change("lastName")}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control name="bio" placeholder={bio} onChange={this.change("bio")}/>
          </Form.Group>

          <Form.Group controlId="formGridLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control name="location" placeholder={location} onChange={this.change("location")}/>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPicture">
              <Form.Label>Picture</Form.Label>
              <Form.Control placeholder={<img
                width={300}
                height={300}
                className="mr-3"
                src= { picture }
                alt="Profile Picture"
                class="center"
                style={{borderRadius: 300/2}}
              />}/>
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

export default withCookies(EditProfile);
