import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, Modal, CardDeck, Row, Col, InputGroup} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import AddFriendButton from '../../components/AddFriendButton/AddFriendButton';
import RemoveFriendButton from '../../components/RemoveFriendButton/RemoveFriendButton';
import axios from 'axios';
class Friends extends Component{
  state = {
    info: [],
    token: this.props.cookies.get('tws-token'),
    allFriendships:[],
    userFriendships: [],
    allUsers: [],
    users: {
      user: ["AD"],
      first: ["Anthony"],
      last: ["Diaz"]
    }
  }

  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/friendships/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({allFriendships: res}))
    .catch(error => console.log(error))

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({allUsers: res}))
    .catch(error => console.log(error))

    this.setState({info: this.props.user})

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
                    <h5><a>{friend.userName}</a></h5>
                    <p>{friend.firstName} {friend.lastName}</p>
                    
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
    /*
    let user = this.props.user;
    { this.state.allFriendships.map(friendship => {
      friendship.userOne === user ? (this.setState({userFriendships: this.state.userFriendships.concat(friendship.userTwo)}))
      : friendship.userTwo === user ? (this.setState({userFriendships: this.state.userFriendships.concat(friendship.userOne)}))
      : this.setState({users: null})
      })
    }
    console.log("USER FRIENDSHIPS");
    console.log(this.state.userFriendships);
    */
    return (
      <div>
        {this.props.userFriendships ? (

            <Card style = {{color: "#222"}}>
              <Card.Header><h2>Friend's List</h2></Card.Header>
              <this.search/>
              <ListGroup>
                <this.existingFriend/>
              </ListGroup>
            </Card>

        ) : (<h3 style={{color: "#1BFFFF"}}>No friends found! </h3>)}
      </div>
    )
  }


search = evt => {
  return (
    <div>
      <Form style={{padding: "5px"}}>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Control style={{background: "#222", color: "#1BFFFF"}} type="userName" placeholder="Search Username" />
          </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}



  render(){
    console.log("FRIENDS CODE");
    console.log(this.props.user);

      return (
        <div style={{background: "#222"}}>
          <this.friendList/>
        </div>
      )
    }
  }


export default withCookies(Friends);
