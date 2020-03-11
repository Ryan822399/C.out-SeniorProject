import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, Modal} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import AddFriendButton from '../../components/AddFriendButton/AddFriendButton';
import axios from 'axios';
class Friends extends Component{
  state = {
    info: [],
    token: this.props.cookies.get('tws-token')
  }

  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/friendslist/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({info: res}))
    .catch(error => console.log(error))
    console.log(this.state.info);
  }



  UserName = event => {
    return (
      <h4>
        {this.state.info[0].userName}
      </h4>
    )
  }

  profilePicture = evt => {
    return (
      <img
        width={64}
        height={64}
        className="mr-3"
        src= {this.state.info[0].picture}
        alt="Profile Picture"
      />
    )
  }
  friendPost = evt => {
    return (
      <div>
        { this.state.info.map(info => {
          return (
            <div key={info.id}>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src= {info.picture}
                  alt="Profile Picture"
                />
                <Media.Body>
                  <h4>
                    {info.userName}
                  </h4>
                  <p>
                    Online
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
            </ListGroup>
            </div>
          )
        }) }
      </div>
    )
  }


  render(){
    console.log(this.state.info);
      return (
        <React.Fragment>
      {
        this.state.info[0] ? (
          <Container>
            <Card style = {{ width: '20rem'}}>
              <Card.Header>Friend's List</Card.Header>
              <Form>
                <this.friendPost />
              </Form>
              <AddFriendButton /> <br/><hr></hr>
            </Card>
          </Container>
        ) : (<h3>loading </h3>)
      }
      </React.Fragment>
      )
    }
  }


export default withCookies(Friends);
