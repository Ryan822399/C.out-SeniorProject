import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, Modal, CardDeck, Row, Col, InputGroup} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import EditButton from '../../components/EditButton/EditButton';
import AddFriendButton from '../../components/AddFriendButton/AddFriendButton';
import RemoveFriendButton from '../../components/RemoveFriendButton/RemoveFriendButton';
import axios from 'axios';
class SearchFriends extends Component{
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

  searchedFriends = evt => {
    return (
      <div>
        { this.state.info.map(user => {
          return (
            <div key={user.id}>
              <ListGroup.Item>
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src= {user.picture}
                    alt="Profile Picture"
                  />
                  <Media.Body>
                    <h5>{user.userName}</h5>
                    <p>{user.firstName} {user.lastName}</p>
                    <p></p>
                  </Media.Body>
                </Media>
                <Form>
                  <Button variant="dark" type="submit" block>
                    Add Friend
                  </Button>
                </Form>
              </ListGroup.Item>
            </div>
          )
        })}
      </div>
    )
  }

  addFriendsList = evt => {
    return (
      <div>
        {this.state.info[0] ? (

          <Card style = {{color: "#222"}}>
            <Card.Header><h2>Search A Friend</h2></Card.Header>
            <this.search/>
            <ListGroup>
              <this.searchedFriends/>
            </ListGroup>
            <Form>
            </Form>
          </Card>

        ) : (<h3>No friends found! </h3>)}
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
    console.log(this.state.info);
      return (
        <div style={{background: "#222"}}>
            <Card border="info" style={{ width: '100%', background: "#222", color: "#1BFFFF", height: "100%"}}>
              <Card.Body>
                <Card.Title style={{textAlign: "center"}}><h1>Friends</h1></Card.Title>
                <Card.Text style={{textAlign: "left"}}>
                  <Row>
                    <Col>
                      <this.addFriendsList/>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      )
    }
  }


export default withCookies(SearchFriends);
