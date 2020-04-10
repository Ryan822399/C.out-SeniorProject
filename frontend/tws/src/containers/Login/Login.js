import React, {Component} from 'react';
import { withCookies } from 'react-cookie';
import {Row, Col, Container, Navbar, Jumbotron, Card, Nav} from 'react-bootstrap';
import './Login.css';
var FontAwesome = require('react-fontawesome');

class Login extends Component{

  state = {

    credentials: {
      username: '',
      password: ''
    },

    username: '',
    password: '',
    isLoginView: true
  }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }

  input = val => evt => {
    if(val == "userName") {
      this.setState({username: evt.target.value});
    }
    else {
      this.setState({password: evt.target.value});
    }
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

  }

  toggleView = () => {
    this.setState({isLoginView: !this.state.isLoginView})
  }

  render(){
    return <div className="login-container">
    {/*
    <Navbar className="top">
      <Navbar.Brand href="#home">

      <h1>
        <FontAwesome name="heartbeat" />
      <span>Track Share Workout</span>
      </h1>
      </Navbar.Brand>
    </Navbar>
    <Jumbotron className="jumbotron" style={{background: "#F1F1F2"}}>
      <Container style={{marginTop: "30px"}}>
      <Row>
        <Col sm={8}>
          <h2>Track, Share, Workout <br/> and Connect with friends on TWS.</h2>
          <div style={{marginTop: "40px"}}>
          <FontAwesome name="dumbbell"  style={{"font-size": "2rem", marginTop: "14px"}} />
            <span style={{marginLeft: "10px"}}> <strong>View workouts and post</strong> to the world in news feed.</span>
          <br/>
          <FontAwesome name="newspaper" style={{"font-size": "2rem", marginTop: "14px"}}/>
            <span style={{marginLeft: "10px"}}> <strong>Share what you</strong> like on your timeline.</span>
          <br/>
          <FontAwesome name="chart-line" style={{"font-size": "2rem", marginTop: "14px"}} />
            <span style={{marginLeft: "10px"}}> <strong>Track all </strong> workouts and save.</span>
          <br/>
          </div>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Header style={{background: "#66A5AD"}}>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first" onClick={this.toggleView} style={{color: "#222"}}>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link" onClick={this.toggleView}  style={{color: "#222"}}>Register</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body style={{background: "#A1D6E2"}}>
              <Card.Title>
                <h2>
                  {this.state.isLoginView ? 'Login' : 'Register'}
                </h2></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">It's quick and simple.</Card.Subtitle>
              <Card.Text>
                <span>Username</span> <br/>
                  <input type="text" name="username" value={this.state.credentials.username}
                  onChange={this.inputChanged}/><br/>
                <span>Password</span> <br/>
                <input type="password" name="password" value={this.state.credentials.password}
                  onChange={this.inputChanged}/><br/>

                <button onClick={this.login} style={{margin: "10px", marginLeft: "60px", color: "#222"}}>
                  {this.state.isLoginView ? 'Login' : 'Register'}
                </button>

                <p onClick={this.toggleView}>
                  {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
                </p>

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
      </Jumbotron>
      */}
      <Row>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src="https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Navbar className="top">
                  <Navbar.Brand href="#home">

                  <h1>
                    <FontAwesome name="heartbeat" />
                  <span>Track Share Workout</span>
                  </h1>
                  </Navbar.Brand>
                </Navbar>
              </Card.Title>
              <Card.Text>
              <Row>
                <Col sm={8} style={{textAlign: "center"}}>
                  <Card className="leftCard">
                    <Card.Header>
                      <h2 style={{color: "#222"}}>Track, Share, Workout <br/> and Connect with friends on TWS.</h2>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <div style={{marginTop: "40px", color: "#222"}}>
                        <FontAwesome name="dumbbell"  style={{"font-size": "2rem", marginTop: "14px"}} />
                          <h3 style={{marginLeft: "10px"}}> <strong>View workouts and post</strong> to the world in news feed.</h3>
                        <br/>
                        <FontAwesome name="newspaper" style={{"font-size": "2rem", marginTop: "14px"}}/>
                          <h3 style={{marginLeft: "10px"}}> <strong>Share what you</strong> like on your timeline.</h3>
                        <br/>
                        <FontAwesome name="chart-line" style={{"font-size": "2rem", marginTop: "14px"}} />
                          <h3 style={{marginLeft: "10px"}}> <strong>Track all </strong> workouts and save.</h3>
                        <br/>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/*
                  <h2 style={{color: "#222"}}>Track, Share, Workout <br/> and Connect with friends on TWS.</h2>
                  <div style={{marginTop: "40px", color: "#222"}}>
                  <FontAwesome name="dumbbell"  style={{"font-size": "2rem", marginTop: "14px"}} />
                    <span style={{marginLeft: "10px"}}> <strong>View workouts and post</strong> to the world in news feed.</span>
                  <br/>
                  <FontAwesome name="newspaper" style={{"font-size": "2rem", marginTop: "14px"}}/>
                    <span style={{marginLeft: "10px"}}> <strong>Share what you</strong> like on your timeline.</span>
                  <br/>
                  <FontAwesome name="chart-line" style={{"font-size": "2rem", marginTop: "14px"}} />
                    <span style={{marginLeft: "10px"}}> <strong>Track all </strong> workouts and save.</span>
                  <br/>
                  </div>
                  */}
                </Col>

                <Col>
                <h2>
                  {this.state.isLoginView ? 'Login' : 'Register'}
                </h2>
                <span>Username</span> <br/>
                  <input type="text" name="username" value={this.state.credentials.username}
                  onChange={this.inputChanged}/><br/>
                <span>Password</span> <br/>
                <input type="password" name="password" value={this.state.credentials.password}
                  onChange={this.inputChanged}/><br/>

                <button onClick={this.login} style={{margin: "10px", color: "#222"}}>
                  {this.state.isLoginView ? 'Login' : 'Register'}
                </button>
                <p onClick={this.toggleView}>
                  {this.state.isLoginView ? 'Create Account' : 'Back to Login'}
                </p>
                </Col>

              </Row>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>

  }
}

export default withCookies(Login);
