import React, {Component} from 'react';
//import { withCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import axios from 'axios';
class Friends extends Component{
  state = {
    info: [],
    name: "",
    token: this.props.cookies.get('tws-token')
  }

  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({info: res}))
    .catch(error => console.log(error))
    console.log(this.state.info);

    fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({posts: res}))
    .catch(error => console.log(error))
    console.log("TESTING");
    console.log(this.state.posts);

    /*
    Promise.all([
            fetch('${process.env.REACT_APP_API_URL}/api/profile/'),
            fetch('${process.env.REACT_APP_API_UR}/api/feedpost/')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => this.setState({
            info: data1,
            posts: data2
        }));
    */
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  UserName = event => {
    console.log("Checking UserName")
    console.log(this.state.info)
    return (
      <h4>
        { this.state.info[0] ? <p>{this.state.info[0].userName}</p> : <p>NULL First</p> }
      </h4>
    )
  }

  profilePicture = evt => {
    console.log(this.state.info[0]);
    return (
      <img
        width={300}
        height={300}
        className="mr-3"
        //src= { this.state.info[0].picture }
        alt="Profile Picture"
        class="center"
        style={{borderRadius: 300/2}}
      />
    )
  }

  handleClick(){
    console.log("Checking Click")
  }


  render(){
      console.log(this.state.name);
      return (
        <div>
        {/*<input name="firstName" onChange={this.UserName}/>*/}
        {/*
        <h4>
          { this.state.info[0] ? <p>{this.state.info[0].firstName}</p> : <p>NULL First</p> }
          { this.state.info[0] ? <p>{this.state.info[0].lastName}</p> : <p>NULL Last</p> }
        </h4>
        */}
        {/*<this.UserName />*/}
        <Container>
          <Card style = {{ width: '20rem'}}>
            <Card.Header>Friend's List</Card.Header>
            <ListGroup variant="flush">

              <ListGroup.Item>
              <Media>
                {<this.profilePicture/>}
                {/*{ this.state.info[0] ? <p>{this.state.info[0].picture}</p> : <p>NULL First</p> }*/}
                <Media.Body>
                  <this.UserName />
                  <p>
                    Online
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
            </ListGroup>
            <Form>
            <Form.Group controlId="formBasicInput">
              <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>
            <Button onClick={this.handleFormSubmit} variant="outline-success" type="submit" block>
              Add Friend
            </Button>
            <Button variant="outline-success" type="submit" block>
              Remove Friend
            </Button>
            </Form>
          </Card>
        </Container>
        </div>
      )
    }
  }


export default withCookies(Friends);
