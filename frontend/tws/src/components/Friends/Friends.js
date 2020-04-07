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
    userFriends: null
  }




  UserName = event => {
    return (
      <h4>
        {this.state.info[0].userName}
      </h4>
    )
  }

  updateFriends = id => evt => {
    var array = [...this.state.userFriends]; // make a separate copy of the array
    var index = array.indexOf(id);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({userFriends: array});
    }
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
        { this.props.userFriendships.map(friend => {
          console.log("FRIEND ID");
          console.log(friend.id);
          return (
            <div key={friend.id}>
              <ListGroup.Item style={{textAlign: "left", background: "#A1D6E2"}}>
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src= {`${process.env.REACT_APP_API_URL}${friend.picture}` }
                    alt="Profile Picture"
                  />
                  <Media.Body>
                    <h5>{friend.userName}</h5>
                    <p>{friend.firstName} {friend.lastName}</p>
                    <p>{friend.bio}</p>
                  </Media.Body>
                </Media>
                <Form>
                  <Button variant="dark" type="submit" onClick={this.updateFriends(friend.id)} block>
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
        {this.props.userFriendships ? (

            <Card style = {{background: "#A1D6E2", color: "#222"}}>
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
          <AddFriend/>

          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Control style={{background: "#66A5AD", color: "#222"}} type="userName" placeholder="Search Username" />
          </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  )
}



  render(){
    console.log("COMING FROM FRIENDS");
    console.log(this.props.userFriendships);
    //this.setState({userFriends: this.props.userFriendships});
    //console.log(this.state.userFriends);

      return (
        <div>
          <this.friendList/>
        </div>
      )
    }
  }


export default withCookies(Friends);
