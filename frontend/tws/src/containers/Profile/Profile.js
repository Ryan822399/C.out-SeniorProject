import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup, ButtonToolbar, Modal, Row, Col, ListGroup, ListGroupItem, Container} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';
import EditButton from '../../components/EditButton/EditButton';
import { withCookies } from 'react-cookie';
import TimelineDetails from '../../components/TimelineDetails/TimelineDetails';
import Friends from '../../components/Friends/Friends';


class Profile extends Component {

  state = {
    info: [],
    posts: [],
    usersPosts: [],
    userFriendships: [],
    token: this.props.cookies.get('tws-token'),
    currentID: this.props.cookies.get('tws-id')
  }

  font = {
    fontFamily: "Trebuchet MS, Helvetica, sans-serif",
  };

  componentDidMount() {

    //parsing the passed in user id to display the proper profile
    var currentLocation = window.location;
    var url = new URL(currentLocation);
    var urlId = url.searchParams.get("id");
    var link = process.env.FRONTEND_WEB + "/api/profile/" + {urlId};
    if (currentLocation == link){
      urlId = this.props.cookies.get('tws-id');
    }

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/${this.props.cookies.get('tws-id')}/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( (res) => this.setState({info: res}))
    .catch(error => console.log(error))


    fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({posts: res}))
    .catch(error => console.log(error))


    const id = { id: this.props.ID, userID: this.props.ID };
    let friendsBody = {
      userID: this.state.currentID
    }
    console.log("CALLING fetch")
    console.log(friendsBody)
    fetch(`${process.env.REACT_APP_API_URL}/api/friendships/${this.state.currentID}/get_friends/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(friendsBody)
    }).then( resp => resp.json())
    .then( res => this.setState({userFriendships: res.result }))
    .catch(error => console.log(error))

//
  }


  profileUserName = evt => {

    return (
      <Media>
        <Media.Body>
          <h2 style={{color: "#1BFFFF"}}> @{this.state.info.userName} </h2>
        </Media.Body>
      </Media>
    )
  }

  profilePicture = evt => {
    return (
      <img
        width={300}
        height={300}
        className="mr-3"
        src= { this.state.info.picture }
        alt="Profile Picture"
        style={{borderRadius: 300/2, padding: "2%"}}
      />
    )
  }

  profileInformation = evt => {
    return (
      <Media>
        <Media.Body>
          <h4 style={{padding: "0"}}>
            { <h4>{this.state.info.firstName} {this.state.info.lastName}</h4> }
          </h4>

            { <p> { this.state.info.location} </p> }


            { <p> {this.state.info.bio} </p> }

        </Media.Body>
      </Media>
    )
  }

  profilePost = evt => {
    return (
      <div>
        { this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <CardGroup id="posts">
                <Card style={{background: "#222"}}>
                  <Card.Img height={300} variant="top" src={post.picture} style={{width: "25%"}} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      {post.caption}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Posted 2 days ago</small>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          )
        }) }
      </div>
    )
  }




  profile = evt => {
    return (
        <Card style={{ background: "white", color: "#222", opacity: ".9" }}>
          <Card.Header><h2 style={{textAlign: "center"}}>@{this.state.info.userName}</h2></Card.Header>
          <Media style={{background: "white"}}>
            <this.profilePicture/>
            <Media.Body>
            <Card.Body style={{textAlign: "left"}}>
              <Card style={{ background: "white", color: "#222" }}>
                <Card.Body>
                  <Card.Title><h3 style={{ color: "#222" }}>{this.state.info.firstName} {this.state.info.lastName}</h3></Card.Title>
                  <Card.Subtitle><h4>{this.state.info.location}</h4></Card.Subtitle>
                  <Card.Text>
                    {this.state.info.bio}
                  </Card.Text>
                  <EditButton style={{marginLeft: "auto", marginRight: "auto"}}user={this.state.info} token={this.state.token}/>
                </Card.Body>
              </Card>
            </Card.Body>
            </Media.Body>
          </Media>
        </Card>
    )
  }

  render() {

  let profilePosts = this.state.posts.map(post => {

    return (

        <Col xs="6" sm="3" key={post.id} style={{display: "flex", alignItems: "stretch"}}>
          <Card style={{color: "#222"}}>
            <Card.Img variant="top" src={post.picture} style={{height: "50%"}}/>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{post.caption}</ListGroupItem>
                <ListGroupItem>{post.post}</ListGroupItem>
              </ListGroup>
              </Card.Text>
            </Card.Body>
            <ButtonToolbar>
            <Button variant="dark">Like</Button>
            <Button variant="dark">Comment</Button>
            </ButtonToolbar>
          </Card>
        </Col>

    )
  })
    return (
      <div>
        { this.state.info ? (
          <Card className="bg-dark text-white" style={this.font} style={{background: "black"}}>
            <Card.Img src="https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg" alt="Card image"/>
            <Card.ImgOverlay>
                <Card.Body>
                    <Row>
                      <Col xs="5">
                        <this.profile/>
                      </Col>
                      <Col>
                        <Friends userFriendships={this.state.userFriendships}
                        ID={this.state.currentID}/>
                      </Col>
                    </Row>

                    <Row style={{paddingTop: "2%"}}>
                      <CardGroup>
                        {profilePosts}
                      </CardGroup>
                    </Row>

                </Card.Body>

            </Card.ImgOverlay>
          </Card>
        )
          : <h3 style={{color: "#222"}}>Loading</h3>
        }
      </div>
    )
  }
}
export default withCookies(Profile);
