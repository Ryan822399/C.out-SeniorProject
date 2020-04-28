import React, {Component} from 'react';
import { withCookies } from 'react-cookie';
import {Row, Col, Container, Navbar} from 'react-bootstrap';
import './Login.css';
var FontAwesome = require('react-fontawesome');

class Login extends Component{

  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoginView: true
  }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  login = event => {
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
        if(res["non_field_errors"])
        {console.log("ERROR: Bad Login attempt!", res)}
        else {window.location.href = "/homepage/feed";}
      
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

  }

  toggleView = () => {
    this.setState({isLoginView: !this.state.isLoginView})
  }

  render(){
    return <div className="login-container">
    <Navbar style={{background: "#6c757d"}}  variant="dark">
      <Navbar.Brand href="#home">

      <h1>
        <FontAwesome name="heartbeat" />
      <span>Track Share Workout</span>
      </h1>
      </Navbar.Brand>
    </Navbar>
      <Container style={{marginTop: "30px"}}>
      <Row>
        <Col sm={8}>
          <h2>Track, Share, Workout <br/> and Connect with friends on TWS.</h2>
          <div style={{marginTop: "40px"}}>
          <FontAwesome name="dumbbell"  style={{fontSize: "2rem", marginTop: "14px"}} />
            <span style={{marginLeft: "10px"}}> <strong>View workouts and post</strong> to the world in news feed.</span>
          <br/>
          <FontAwesome name="newspaper" style={{fontSize: "2rem", marginTop: "14px"}}/>
            <span style={{marginLeft: "10px"}}> <strong>Share what you</strong> like on your timeline.</span>
          <br/>
          <FontAwesome name="chart-line" style={{fontSize: "2rem", marginTop: "14px"}} />
            <span style={{marginLeft: "10px"}}> <strong>Track all </strong> workouts and save.</span>
          <br/>
          </div>
        </Col>
        <Col sm={4}>
            <h2>
              {this.state.isLoginView ? 'Login' : 'Register'}
            </h2>
            <p> It's quick and simple.</p>
            <span>Username</span> <br/>
              <input type="text" name="username" value={this.state.credentials.username}
              onChange={this.inputChanged}/><br/>
            <span>Password</span> <br/>
              <input type="password" name="password" value={this.state.credentials.password}
                onChange={this.inputChanged}/><br/>

              <button onClick={this.login} style={{margin: "10px", marginLeft: "60px"}}>
                {this.state.isLoginView ? 'Login' : 'Register'}
              </button>
              <p onClick={this.toggleView}>
              {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
              </p>
        </Col>
      </Row>

      </Container>
    </div>

  }
}

export default withCookies(Login);
