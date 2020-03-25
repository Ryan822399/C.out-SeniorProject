import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup, ButtonToolbar, Modal, Carousel, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';
import EditButton from '../../components/EditButton/EditButton';
import CarouselPics from '../../components/CarouselPics/CarouselPics';
import { withCookies } from 'react-cookie';
import TimelineDetails from '../../components/TimelineDetails/TimelineDetails';
import Friends from '../../components/Friends/Friends';


class Profile extends Component {

  state = {
    info: [],
    posts: [],
    token: this.props.cookies.get('tws-token'),
    currentID: this.props.cookies.get('tws-id')
  }

  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/${this.state.currentID}/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({info: res}))
    .catch(error => console.log(error))
    //console.log(this.state.info);

    fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.token}`
      }
    }).then( resp => resp.json())
    .then( res => this.setState({posts: res}))
    .catch(error => console.log(error))
    // console.log("TESTING");
    // console.log(this.state.posts);
    // console.log("TOKEN");
    // console.log(this.state.token);

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
        class="center"
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


  carousel = evt => {
    return (
      <div>
        <Carousel>
          <CarouselPics posts={this.state.posts}/>
        </Carousel>

      </div>
    )
  }

  profile = evt => {
    return (
        <Card style={{ background: "white", color: "#222" }}>
          <Card.Header><h2>@{this.state.info.userName}</h2></Card.Header>
          <Media>
            <this.profilePicture/>
            <Media.Body>
            <Card.Body style={{textAlign: "left"}}>
              <Card style={{ background: "#222", color: "#1BFFFF" }}>
                <Card.Header><h3 style={{ color: "#1BFFFF" }}>{this.state.info.firstName} {this.state.info.lastName}</h3></Card.Header>
                <Card.Body>
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
    console.log("User logged (Profile Page)");
    console.log(this.state.info);

    console.log("Account Type");
    console.log(this.state.info.accountType);

    console.log("TOKEN");
    console.log(this.props.cookies.get('tws-id'));
    return (
      <div>
        { this.state.info ? (
          <Card border="info" style={{background: "#222", textAlign: "center", color: "#1BFFFF"}}>
            <Card.Body>
              <Card.Title style={{textAlign: "center"}}><h1>Profile</h1></Card.Title>

                <Row>
                  <Col xs="5">
                    <this.profile/>
                  </Col>
                  <Col>
                    <Friends />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TimelineDetails />
                  </Col>

                </Row>
            </Card.Body>
          </Card>
        )
          : <h3 style={{color: "#1BFFFF"}}>Loading</h3>
        }
      </div>
    )
  }
}
//<this.profilePost />
export default withCookies(Profile);
