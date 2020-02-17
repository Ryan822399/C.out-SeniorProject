import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';

class Profile extends Component {

  state = {
    info: []
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({info: res}))
    .catch(error => console.log(error))
    console.log(this.state.info);
  }


  render() {
    console.log(this.state.info)
    return (
      <div>

        <div className="body">
          <Media>
            <img
              width={384}
              height={384}
              className="mr-3"
              src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
              alt="Joker Peter Griffin"
            />
            <Media.Body>
              <h4>
                { this.state.info[0] ? <p>{this.state.info[0].firstName}</p> : <p>NULL First</p> } { !this.state.lastName ? <p> {this.state.lastName} </p> : <p>NULL Last</p> }
              </h4>
              <h5>
                @PeterGriffin
              </h5>
              <p>
                { !this.state.bio ? <p> {this.state.bio} </p> : <p>NULL Bio</p> }
              </p>
            </Media.Body>
          </Media>
        </div>

        <h3>
          Posts
        </h3>
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
  }
}

export default Profile;
