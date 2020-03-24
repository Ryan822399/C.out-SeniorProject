import React, {Component, useState} from 'react';
import { withCookies } from 'react-cookie';
import {Row, Col, Container, Card, Form, Button, ListGroup, ListGroupItem, Alert} from 'react-bootstrap';
import axios from 'axios';
var FontAwesome = require('react-fontawesome');

class Login extends Component{

  state = {
    credentials: {
      username: '',
      password: ''
    },
    user: [],
    firstName: '',
    isLoginView: true
  }

  // inputChanged = val => event => {
  //   console.log(event.target.value);
  //   if(val == "username") {
  //     this.setState({username: event.target.value});
  //     console.log(this.state.username);
  //   }
  //   else if(val == "password") {
  //     this.setState({password: event.target.value});
  //     console.log(this.state.password);
  //   }
  // }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
    console.log("TESTING THIS BITCH");
    console.log(this.state.credentials);

  }

  // login = event => {
  //   let credentials = {
  //     username: this.state.username,
  //     password: this.state.password
  //   }
  //   console.log("USERNAME");
  //   console.log(credentials.username);
  //   console.log("PASSWORD");
  //   console.log(credentials.password);
  //   if(this.state.isLoginView)
  //   {
  //     fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(credentials)
  //     }).then( resp => resp.json())
  //     .then( res => {
  //       this.props.cookies.set('tws-token', res.token);
  //       this.props.cookies.set('tws-id', res.id);
  //       window.location.href = "/homepage/feed";
  //     })
  //     .catch( error => console.log(error))
  //   } else {
  //     fetch(`${process.env.REACT_APP_API_URL}/api/users/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(credentials)
  //     }).then( resp => resp.json())
  //     .then( res => {
  //       this.setState({isLoginView: true})
  //     })
  //     .catch( error => console.log(error))
  //   }
  //
  // }

  alertDismissible = evt => {
    const [show, setShow] = useState(true);

    return (
      <div>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me ya'll!
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </div>
    )
  }

  login = event => {
    console.log("LOGIN");
    console.log(this.state.credentials);
    console.log(this.state.isLoginView);
    if(this.state.isLoginView)
    {
      fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.credentials)
      }).then( resp => resp.json())
      .then( res => {
        this.props.cookies.set('tws-token', res.token);
        this.props.cookies.set('tws-id', res.id);
        window.location.href = "/homepage/feed";
      })
      .catch( error => console.log(error))
    } else {

      //creating user
      fetch(`${process.env.REACT_APP_API_URL}/api/users/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.credentials)
      }).then( resp => resp.json())
      .then( res => {
        this.setState({isLoginView: true})
      })
      .catch( error => console.log(error))
    }
    alert("Welcome");

  }


  register = evt => {
    return (
      <div>
        <Card border="info" style={{marginLeft: "auto", marginRight: "auto" /*display: "flex", alignItems: "center", justifyContent: "center"*/ }}>
          <Card.Header>
            <h2>
              {this.state.isLoginView ? 'Login' : 'Register'}
            </h2>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formGridUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="userName" type="userName" placeholder={"Enter Username"} onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="firstName" type="firstName" placeholder={"Enter First Name"} onChange={this.inputChanged}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="lastName" type="lastName" placeholder={"Enter Last Name"} onChange={this.inputChanged}/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="location" placeholder={"Enter Location"} onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Group controlId="formGridPicture">
                <Form.Label>Picture</Form.Label>
                  <br/>
                  <input
                    style={{padding: "5px"}}
                    type="file"
                    id="picture"
                    name="picture"
                    accept="image/png, image/jpeg, image/JPG"  onChange={this.inputChanged}/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridHeightFeet">
                  <Form.Label>Height (Feet)</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="heightFeet" type="heightFeet" placeholder={"Enter Height (Feet)"} onChange={this.inputChanged}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHeightInches">
                  <Form.Label>Height (inches)</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} name="heightInches" type="heightInches" placeholder={"Enter Height (Inches)"} onChange={this.inputChanged}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Account Type</Form.Label>
                  <Form.Control style={{background: "#222", color: "#1BFFFF"}} as="select">
                    <option>Private</option>
                    <option>Public</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Button variant="dark" type="submit" onClick={this.submit, this.update}>
                Register
              </Button>
              <p onClick={this.toggleView}>
                {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }

  signIn = evt => {
    return (
      <div>
      <Card border="info" style={{ color: '#222', background: "white", marginLeft: "auto", marginRight: "auto" /*display: "flex", alignItems: "center", justifyContent: "center"*/ }}>
        <Card.Header>
          <h2>
            {this.state.isLoginView ? 'Login' : 'Register'}
          </h2>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
              style={{background: "#222", color: "#1BFFFF"}}
              type="userName"
              name="username" value={this.state.credentials.username}
              placeholder="Enter Username"
              onChange={this.inputChanged}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              style={{background: "#222", color: "#1BFFFF"}}
              type="password"
              name="password"
              value={this.state.credentials.password}
              placeholder="Password"
              onChange={this.inputChanged}/>
            </Form.Group>
            <Button onClick={this.login} variant="dark" type="submit">
              {this.state.isLoginView ? 'Login' : 'Register'}
            </Button>
            <p onClick={this.toggleView}>
              {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
            </p>
          </Form>
        </Card.Body>
      </Card>
      </div>
    )
  }

  option = evt => {
    return (
      <div>
        {this.state.isLoginView ? <this.signIn /> : <this.register />}
      </div>
    )
  }

  twsInfo = () => {
    return (
      <Card border="info" style={{ marginLeft: "auto", marginRight: "auto", background: "white", color: "#222"}}>
        <Card.Header><h2>Connect with your friends and share your workout progress!</h2></Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem style={{padding: "2%"}} ><h4 style={{color: "#222"}}>See photos and updates from friends in news feed.</h4></ListGroupItem>
          <ListGroupItem style={{padding: "2%"}} ><h4 style={{color: "#222"}}>Share what's new in your life on your timeline.</h4></ListGroupItem>
          <ListGroupItem style={{padding: "2%"}} ><h4 style={{color: "#222"}}>Track your workout progress and show it off.</h4></ListGroupItem>
        </ListGroup>
      </Card>
    )
  }

  toggleView = () => {
    this.setState({isLoginView: !this.state.isLoginView})
  }

  render(){
    return (
      <div className="login-container">

        <Card border = "info" style={{background: "#222"}}>
          <Card.Body>
            <Card.Title style={{textAlign: "center"}}>
              <h1 style={{color: "#1BFFFF", textAlign: "center"}}>
                <FontAwesome name="heartbeat" style={{color: "white"}}/>
                <span>TWS</span>
              </h1>
            </Card.Title>
            <Card.Text style={{paddingTop: "1%"}}>
              <Row>
                <Col style={{padding: "2%"}}>
                  <this.twsInfo />
                </Col>
                <Col xs="5" style={{padding: "2%"}}>
                  <this.option/>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      // <div className="login-container" style={{background: "#222", color: "#1BFFFF"}}>
      //
      //   <Container>
      //     <Row>
      //       <Col></Col>
      //       <Col xs={6}>
      //         <h1>
      //           {this.state.isLoginView ? 'Login' : 'Register'}
      //         </h1>
      //         <span>Username</span> <br/>
      //           <input type="text" name="username" value={this.state.credentials.username}
      //           onChange={this.inputChanged}/><br/>
      //         <span>Password</span> <br/>
      //           <input type="password" name="password" value={this.state.credentials.password}
      //             onChange={this.inputChanged}/><br/>
      //           <button onClick={this.login} >
      //             {this.state.isLoginView ? 'Login' : 'Register'}
      //           </button>
      //           <p onClick={this.toggleView}>
      //           {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
      //           </p>
      //       </Col>
      //       <Col></Col>
      //     </Row>
      //   </Container>
      //
      // </div>
  )

  }
}

export default withCookies(Login);
