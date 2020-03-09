import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup, ButtonToolbar, Modal, Carousel} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';
import EditButton from '../../components/EditButton/EditButton';
import CarouselPics from '../../components/CarouselPics/CarouselPics';
import { withCookies } from 'react-cookie';
import {TimelineDetails} from '../../containers/TimelineDetails/TimelineDetails'

class Profile extends Component {

  state = {
    info: [],
    posts: [],
    token: this.props.cookies.get('tws-token')
  }

  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Token ${this.state.token}`
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
    console.log("TOKEN");
    console.log(this.state.token);

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
          <h2 style={{color: "#1BFFFF"}}> @{this.state.info[0].userName} </h2>
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
        src= { this.state.info[0].picture }
        alt="Profile Picture"
        class="center"
        style={{borderRadius: 300/2}}
      />
    )
  }

  profileInformation = evt => {
    return (
      <Media>
        <Media.Body>
          <h4 style={{padding: "0"}}>
            { <h4>{this.state.info[0].firstName} {this.state.info[0].lastName}</h4> }
          </h4>
          <p>
            { <p> { this.state.info[0].location} </p> }
          </p>
          <p>
            { <p> {this.state.info[0].bio} </p> }
          </p>
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

  render() {
    console.log("HEY");
    console.log(this.state.info);
    return (
      <div style={{background: "#222", textAlign: "center", color: "#1BFFFF"}}>
        { this.state.info[0] && this.state.posts[0] ? (
          <div>
            <div className="body" style={{paddingBottom: "1%", borderBottom: "5px solid #1BFFFF"}}>
            <this.profileUserName />
            <this.profilePicture />
            <this.profileInformation />
              <EditButton user={this.state.info} token={this.state.token}/>
            </div>
            
            <CarouselPics posts={this.state.posts}/>
            <this.profilePost />

          </div>
        )
          : <h3 style={{color: "#1BFFFF"}}>Loading</h3>
        }
      </div>
    )
  }
}
//<this.profilePost />
export default withCookies(Profile);
