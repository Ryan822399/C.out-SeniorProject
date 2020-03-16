import React, {Component, useState} from 'react';
import { withCookies } from 'react-cookie';
import {Row, Col, Container, Card, Form, Button} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class Login extends Component{

  state = {
    credentials: {
      username: '',
      password: ''
    },
    // username: '',
    // password: '',
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

    alert("LOGIN MESSAGE");


  }

  toggleView = () => {
    this.setState({isLoginView: !this.state.isLoginView})
  }

  render(){
    return (
      <div className="login-container" style={{background: "#222"}}>
        <h1 style={{color: "#1BFFFF", textAlign: "center"}}>
          <FontAwesome name="heartbeat" style={{color: "white"}}/>
          <span>TWS</span>
        </h1>
        <Card style={{ width: '30%', color: '#222', background: "white", marginLeft: "auto", marginRight: "auto" /*display: "flex", alignItems: "center", justifyContent: "center"*/ }}>
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
