import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, Modal, CardDeck, Row, Col, InputGroup} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import AddFriendButton from '../../components/AddFriendButton/AddFriendButton';
import RemoveFriendButton from '../../components/RemoveFriendButton/RemoveFriendButton';
import AddFriend from '../../components/AddFriend/AddFriend';
import axios from 'axios';
class Friends extends Component{
  state = {
    info: [],
    token: this.props.cookies.get('tws-token'),
    users: {
      user: ["AD"],
      first: ["Anthony"],
      last: ["Diaz"]
    }
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

  existingFriend = evt => {
    return (
      <div>
        { this.state.info.map(friend => {
          return (
            <div key={friend.id}>
              <ListGroup.Item style={{textAlign: "left"}}>
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src= {friend.picture}
                    alt="Profile Picture"
                  />
                  <Media.Body>
                    <h5>{friend.userName}</h5>
                    <p>{friend.firstName} {friend.lastName}</p>
                    <p></p>
                  </Media.Body>
                </Media>
                <Form>
                  <Button variant="dark" type="submit" block>
                    Remove Friend
                  </Button>
                </Form>
              </ListGroup.Item>
            </div>
          )
        })}
      </div>
    )
  }

  friendList = evt => {
    return (
      <div>
        {this.state.info[0] ? (

            <Card style = {{color: "#222"}}>
              <Card.Header><h2>Friend's List</h2></Card.Header>
              <this.search/>
              <ListGroup>
                <this.existingFriend/>
              </ListGroup>
            </Card>

        ) : (<h3>No friends found! </h3>)}
      </div>
    )
  }

search = evt => {
  return (
    <div>
      <Form style={{padding: "5px"}}>
          <AddFriend/>
      </Form>
    </div>
  )
}



  render(){
    console.log(this.state.info);
      return (
        <div style={{background: "#222"}}>
          <this.friendList/>
        </div>
      )
    }
  }


export default withCookies(Friends);