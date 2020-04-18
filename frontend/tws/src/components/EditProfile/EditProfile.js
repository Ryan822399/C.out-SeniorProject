import React, {useStaet, useRef, setShow, Component} from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';
var FontAwesome = require('react-fontawesome');

class EditProfile extends Component {

  state = {
    editedProfile: this.props.user,
    attributes: {
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
      picture: null,
      accountType: "private"
    }
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

  inputChanged = event => {
    let att = this.state.attributes;
    att[event.target.name] = event.target.value;
    this.setState({attributes: att});
    console.log(this.state.attributes);
  }

  handleImageChange = event => {
    console.log(event.target.files[0]);
    let att = this.state.attributes;
    att[event.target.name] = event.target.files[0];
    this.setState({attributes: att});
  };

  handleFormSubmit = event => {

    let profile = {
      userName: this.state.attributes.userName,
      firstName: this.state.attributes.firstName,
      lastName: this.state.attributes.lastName,
      bio: this.state.attributes.bio,
      location: this.state.attributes.location,
      email: this.state.attributes.email,
      dob: this.state.attributes.dob,
      user: this.props.cookies.get('tws-id'),
      heightFeet: this.state.attributes.heightFeet,
      heightInches: this.state.attributes.heightInches,
      picture: this.state.attributes.picture,
      accountType: this.state.attributes.accountType
    }

    console.log(profile);


    if(profile.userName == "") {
      profile.userName = this.props.user.userName;
    }
    if(profile.firstName == "") {
      profile.firstName = this.props.user.firstName;
    }
    if(profile.lastName == "") {
      profile.lastName = this.props.user.lastName;
    }
    if(profile.bio == "") {
      profile.bio = this.props.user.bio;
    }
    if(profile.location == "") {
      profile.location = this.props.user.location;
    }
    if(profile.heightFeet == "") {
      profile.heightFeet = this.props.user.heightFeet;
    }
    if(profile.heightInches == "") {
      profile.heightInches = this.props.user.heightInches;
    }
    if(profile.picture == null) {
      profile.picture = this.props.user.picture;
    }

    console.log(profile);
    alert("CHECKING PROFILE");

    let form_data = new FormData();
    form_data.append('userName', profile.userName);
    form_data.append('firstName', profile.firstName);
    form_data.append('lastName', profile.lastName);
    form_data.append('bio', profile.bio);
    form_data.append('location', profile.location);
    form_data.append('heightFeet', profile.heightFeet);
    form_data.append('heightInches', profile.heightInches);
    form_data.append('picture', profile.picture);
    form_data.append('email', profile.email);
    form_data.append('dob', profile.dob);
    form_data.append('accountType', profile.accountType);
    form_data.append('user', profile.user);

    axios.put(`${process.env.REACT_APP_API_URL}/api/profile/${profile.user}/`, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };


  /*
  change = val => evt => {
    // console.log("EVENT TARGET");
    // console.log(evt.target.value);
    if(val == "userName") {
      // this.setState({userName: evt.target.value});
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.userName;
      att = evt.target.value;
      this.setState({userName: att});
    }
    else if(val == "firstName") {
      // this.setState({firstName: evt.target.value});
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.firstName;
      att = evt.target.value;
      this.setState({firstName: att});
    }
    else if(val == "lastName") {
      // this.setState({lastName: evt.target.value});
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.lastName;
      att = evt.target.value;
      this.setState({lastName: att});
    }
    else if(val == "bio") {
      // this.setState({bio: evt.target.value});
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.bio;
      att = evt.target.value;
      this.setState({bio: att});
    }
    else if(val == "location") {
      // this.setState({location: evt.target.value});
      // console.log(evt.target.value);
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.location;
      att = evt.target.value;
      this.setState({location: att});
    }
    else if(val == "image") {
      // this.setState({picture: evt.target.value});
      // console.log(evt.target.value);
      console.log("EVENT TARGET");
      console.log(evt.target.files[0]);
      let att = this.state.picture;
      att = evt.target.files[0];
      this.setState({picture: att});
    }
    else if(val == "heightFeet") {
      // this.setState({heightFeet: evt.target.value});
      // console.log(evt.target.value);
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.heightFeet;
      att = evt.target.value;
      this.setState({heightFeet: att});
    }
    else if(val == "heightInches") {
      // this.setState({heightInches: evt.target.value});
      // console.log(evt.target.value);
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.heightInches;
      att = evt.target.value;
      this.setState({heightInches: att});
    }
    else if(val == "accountType") {
      // this.setState({accountType: evt.target.value});
      // console.log(evt.target.value);
      console.log("EVENT TARGET");
      console.log(evt.target.value);
      let att = this.state.accountType;
      att = evt.target.value;
      this.setState({accountType: att});
    }
    // console.log(this.state.firstName);
    // console.log(this.state.lastName);
    // console.log(this.state.bio);
    // console.log(this.state.location);
  }
  */
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

  /*
  update = evt => {
    // console.log("THIS PICTURE");
    // console.log(this.state.user.picture);
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
      picture: this.state.picture,
      accountType: this.state.accountType
    }

    // console.log("PICTURE");
    // console.log(this.props.user.picture);
    // console.log(profile.picture);


    if(profile.userName == "") {
      profile.userName = this.props.user.userName;
    }
    if(profile.firstName == "") {
      profile.firstName = this.props.user.firstName;
    }
    if(profile.lastName == "") {
      profile.lastName = this.props.user.lastName;
    }
    if(profile.bio == "") {
      profile.bio = this.props.user.bio;
    }
    if(profile.location == "") {
      profile.location = this.props.user.location;
    }
    if(profile.picture == null) {
      profile.picture = this.props.user.picture;
    }
    if(profile.heightFeet == 0) {
      profile.heightFeet = this.props.user.heightFeet;
    }
    if(profile.heightInches == 0) {
      profile.heightInches = this.props.user.heightInches;
    }
    if(profile.accountType == null) {
      profile.accountType = this.props.user.accountType;
    }

    console.log("BEFORE FORM DATA");
    console.log(profile.userName);
    console.log(profile.firstName);
    console.log(profile.lastName);
    console.log(profile.bio);
    console.log(profile.location);
    console.log(profile.picture);
    console.log(profile.heightFeet);
    console.log(profile.heightInches);
    console.log(profile.accountType);

    alert("TESTING");

    let form_data = new FormData();
    form_data.append('userName', profile.userName);
    form_data.append('firstrName', profile.firstName);
    form_data.append('lastName', profile.lastName);
    form_data.append('bio', profile.bio);
    form_data.append('location', profile.location);
    form_data.append('email', profile.email);
    form_data.append('dob', profile.dob);
    form_data.append('user', profile.user);
    form_data.append('heightFeet', profile.heightFeet);
    form_data.append('heightInches', profile.heightInches);
    form_data.append('picture', profile.picture);
    form_data.append('accountType', profile.accountType);

    axios.put(`${process.env.REACT_APP_API_URL}/api/profile/${profile.user}/`, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))

    // console.log("UPDATED PICTURE");
    // console.log(form_data);
    // console.log("TESTING PROFILE");
    // console.log(profile);
    // fetch(`${process.env.REACT_APP_API_URL}/api/profile/3/`, {
    //   method: 'PUT',
    //   headers: {
    //
    //   },
    //   body: form_data
    // }).then( resp => resp.json())
    // .then( res => console.log(res))
    // .catch(error => console.log(error))
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
    // console.log(profile.picture);
    // console.log(profile.accountType);
    // console.log(this.state.user);
    //console.log(profile);
    //alert("HELLO");
  }
  */


  submit = evt => {
    console.log("CHECKING SUBMIT")
    console.log(this.state.editedProfile);
  }

  render() {
    // console.log("CHECKING");
    // console.log(this.state.userName);
    let userName, firstName, lastName, password, bio, location, picture, heightFeet, heightInches, accountType;
    if (this.props.user !== null) {
      userName = this.props.user.userName;
      firstName = this.props.user.firstName;
      lastName = this.props.user.lastName;
      bio = this.props.user.bio;
      location = this.props.user.location;
      picture = this.props.user.picture;
      heightFeet = this.props.user.heightFeet;
      heightInches = this.props.user.heightInches;
      accountType = this.props.user.accountType;
    }

    let url = 'http://localhost:3000/api/profile/';
    // console.log("THE USER");
    // console.log(this.props.user);
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
                <Form.Control style={{background: "#222", color: "white"}} as="input" name="userName" type="userName" placeholder={userName} value={this.state.userName} onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control style={{background: "#222", color: "white"}} as="input" name="firstName" type="firstName" placeholder={firstName} value={this.state.firstName} onChange={this.inputChanged}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control style={{background: "#222", color: "white"}} as="input" name="lastName" type="lastName" placeholder={lastName} value={this.state.lastName} onChange={this.inputChanged}/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridBio">
                <Form.Label>Bio</Form.Label>
                <Form.Control style={{background: "#222", color: "white"}} as="input" name="bio" type="bio" placeholder={bio} value={this.state.bio} onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Group controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control style={{background: "#222", color: "white"}} as="input" name="location" type="location" placeholder={location} value={this.state.location} onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Group controlId="formGridPicture">
                <Form.Label>Picture</Form.Label>
                  <br/>
                  <input
                    style={{padding: "5px"}}
                    type="file"
                    id="picture"
                    name="picture"
                    accept="image/png, image/jpeg, image/JPG"  onChange={this.handleImageChange}/>

              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridHeightFeet">
                  <Form.Label>Height (Feet)</Form.Label>
                  <Form.Control style={{background: "#222", color: "white"}} as="input" name="heightFeet" type="heightFeet" placeholder={heightFeet} value={this.state.heightFeet} onChange={this.inputChanged}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHeightInches">
                  <Form.Label>Height (inches)</Form.Label>
                  <Form.Control style={{background: "#222", color: "white"}} as="input" name="heightInches" type="heightInches" placeholder={heightInches} value={this.state.heightInches} onChange={this.inputChanged}/>
                </Form.Group>
              </Form.Row>

              <Button variant="dark" type="submit" onClick={this.handleFormSubmit}>
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
