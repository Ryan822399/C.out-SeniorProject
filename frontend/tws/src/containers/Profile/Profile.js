import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup, ButtonToolbar, Modal} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';
import EditButton from '../../components/EditButton/EditButton';

class Profile extends Component {

  state = {
    info: []
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

  render() {
    console.log(this.state.info)
    return (
      <div style={{background: "#222", textAlign: "center", color: "#1BFFFF"}}>
        { this.state.info[0] ? (
          <div>
            <div className="body" style={{paddingBottom: "1%", borderBottom: "5px solid #1BFFFF"}}>
              <this.profileUserName />
              <this.profilePicture />
              <this.profileInformation />
              <EditButton user={this.state.info}/>
            </div>

          <CardGroup id="posts">
            <Card style={{background: "#222"}}>
              <Card.Img variant="top" src="https://i.ytimg.com/vi/eV5fUPU7zIU/maxresdefault.jpg" />
              <Card.Body>
                <Card.Title>Forcing My Wife To Eat</Card.Title>
                <Card.Text>
                  This was a pretty fun experience even though I almost got her killed. #tbt
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posted 2 days ago</small>
              </Card.Footer>
            </Card>
            <Card style={{background: "#222"}}>
              <Card.Img variant="top" src="https://www.nydailynews.com/resizer/n4XDpTyDGkvQpEQle3t1lwIlUaQ=/415x233/top/www.trbimg.com/img-5c3ca7a6/turbine/ny-1547478934-8c63008drk-snap-image" />
              <Card.Body>
                <Card.Title>Peter Griffin vs. Donald Trump</Card.Title>
                <Card.Text>
                  He got salty.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posted 4 days ago</small>
              </Card.Footer>
            </Card>
            <Card style={{background: "#222"}}>
              <Card.Img variant="top" src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2016/05/family_guy_trump_emmy_campaign_0.jpg" />
              <Card.Body>
                <Card.Title>DJ</Card.Title>
                <Card.Text>
                  #NoCaptionNeeded
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Posted 5 days ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
          </div>
        )
          : <h3>Loading</h3>
        }
      </div>
    )
  }
}

export default Profile;
