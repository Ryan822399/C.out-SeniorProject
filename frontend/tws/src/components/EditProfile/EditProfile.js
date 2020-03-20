import React, {Component} from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import { withCookies } from 'react-cookie';
var FontAwesome = require('react-fontawesome');

class EditProfile extends Component {

  state = {
    editedProfile: this.props.user,
    userName: "",
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
    email: this.props.user.email,
    dob: this.props.user.dob,
    user: this.props.user.user,
    heightFeet: 0,
    heightInches: 0,
    picture: null
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
    if(val == "userName") {
      this.setState({userName: evt.target.value});
    }
    else if(val == "firstName") {
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
    else if(val == "image") {
      this.setState({picture: evt.target.value});
      console.log(evt.target.value);
    }
    else if(val == "heightFeet") {
      this.setState({heightFeet: evt.target.value});
      console.log(evt.target.value);
    }
    else if(val == "heightInches") {
      this.setState({heightInches: evt.target.value});
      console.log(evt.target.value);
    }
    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
    // console.log(this.state.bio);
    // console.log(this.state.location);
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
      heightInches: this.state.heightInches,
      picture: this.state.picture
    }
    // console.log("TESTING PROFILE");
    // console.log(profile);
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/${profile.user}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    }).then( resp => resp.json())
    .then( res => console.log(res))
    .catch(error => console.log(error))
    // console.log(this.state.token);
    // console.log(profile.userName);
    // console.log(profile.firstName);
    // console.log(profile.lastName);
    // console.log(profile.bio);
    // console.log(profile.location);
    // console.log(profile.email);
    // console.log(profile.dob);
    // console.log(profile.user);
    // console.log(profile.heightFeet);
    // console.log(profile.heightInches);
  }


  submit = evt => {
    console.log("CHECKING SUBMIT")
    console.log(this.state.editedProfile);
  }

  render() {
    // console.log("CHECKING");
    // console.log(this.state.userName);
    let userName, firstName, lastName, password, bio, location, picture, heightFeet, heightInches;
    if (this.props.user !== null) {
      userName = this.props.user.userName;
      firstName = this.props.user.firstName;
      lastName = this.props.user.lastName;
      bio = this.props.user.bio;
      location = this.props.user.location;
      picture = this.props.user.picture;
      heightFeet = this.props.user.heightFeet;
      heightInches = this.props.user.heightInches;
    }
    console.log("THE USER");
    console.log(this.props.user);
    return (
      <div style={{background: "#222", color: "#222", padding: "5%"}}>
        <Card border="info" style={{marginLeft: "auto", marginRight: "auto" /*display: "flex", alignItems: "center", justifyContent: "center"*/ }}>
          <Card.Header>
            <h2>
              Edit
            </h2>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formGridUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="userName" type="userName" placeholder={userName} onChange={this.change("userName")}/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="firstName" type="firstName" placeholder={firstName} onChange={this.change("firstName")}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="lastName" type="lastName" placeholder={lastName} onChange={this.change("lastName")}/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridBio">
                <Form.Label>Bio</Form.Label>
                <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="bio" placeholder={bio} onChange={this.change("bio")}/>
              </Form.Group>

              <Form.Group controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="location" placeholder={location} onChange={this.change("location")}/>
              </Form.Group>

              <Form.Group controlId="formGridPicture">
                <Form.Label>Picture</Form.Label>
                  <br/>
                  <input
                    style={{padding: "5px"}}
                    type="file"
                    id="picture"
                    name="picture"
                    accept="image/png, image/jpeg, image/JPG"  onChange={this.change("image")}/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridHeightFeet">
                  <Form.Label>Height (Feet)</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="heightFeet" type="heightFeet" placeholder={heightFeet} onChange={this.change("heightFeet")}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHeightInches">
                  <Form.Label>Height (inches)</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="heightInches" type="heightInches" placeholder={heightInches} onChange={this.change("heightInches")}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control as="select" value="Choose...">
                    {(this.props.user.accountType === 'private') ?
                      <div>
                        <option>Private</option>
                        <option>Public</option>
                      </div>
                    :
                      <div>
                        <option>Public</option>
                        <option>Private</option>
                      </div>
                    }
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Button variant="dark" type="submit" onClick={this.submit, this.update}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default withCookies(EditProfile);
