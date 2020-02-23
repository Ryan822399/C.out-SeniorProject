import React, {Component} from 'react';
//import { withCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
class Friends extends Component{
  state = {
    info: [],
    posts: [],
    token: this.props.cookies.get('tws-token')
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
  }

  UserName = evt => {
    return (
      <h4>
        { this.state.info[0] ? <p>{this.state.info[0].firstName}</p> : <p>NULL First</p> }
        { this.state.info[0] ? <p>{this.state.info[0].lastName}</p> : <p>NULL Last</p> }
      </h4>
    )
  }

  render(){
      return (

        <div>
        {/*
        <h4>
          { this.state.info[0] ? <p>{this.state.info[0].firstName}</p> : <p>NULL First</p> }
          { this.state.info[0] ? <p>{this.state.info[0].lastName}</p> : <p>NULL Last</p> }
        </h4>
        */}
        <this.UserName />
        <Container>
          <Card style = {{ width: '20rem'}}>
            <Card.Header>Friend's List</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
                />
                <Media.Body>
                  <h5>Bob Joe</h5>
                  <p>
                    Online
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
              <ListGroup.Item>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2016/05/family_guy_trump_emmy_campaign_0.jpg"
                />
                <Media.Body>
                  <h5>Joe Bob</h5>
                  <p>
                    Online
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
              <ListGroup.Item>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://www.nydailynews.com/resizer/n4XDpTyDGkvQpEQle3t1lwIlUaQ=/415x233/top/www.trbimg.com/img-5c3ca7a6/turbine/ny-1547478934-8c63008drk-snap-image"
                />
                <Media.Body>
                  <h5>Bobby Jr.</h5>
                  <p>
                    Offline
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
              <ListGroup.Item>
              <Media>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://i.ytimg.com/vi/eV5fUPU7zIU/maxresdefault.jpg"
                />
                <Media.Body>
                  <h5>Bobby Sr.</h5>
                  <p>
                    Offline
                  </p>
                </Media.Body>
                </Media>
              </ListGroup.Item>
            </ListGroup>
            <Form>
            <Form.Group controlId="formBasicInput">
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Button variant="outline-success" type="submit" block>
              Add Friend
            </Button>
            <Button variant="outline-success" type="submit" block>
              Remove Friend
            </Button>
            </Form>
          </Card>
        </Container>
        </div>
      )
    }
  }


export default withCookies(Friends);
