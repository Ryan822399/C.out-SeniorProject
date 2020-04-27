import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, NavDropdown, ListGroupItem, Row, Col} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';
import { withCookies } from 'react-cookie';



class TimelineDetails extends Component {
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

  profilePost = evt => {
    return (
      <div>

        { this.state.posts.map(post => {
          return (
            <div key={post.id}>
              <TimelineItem
                key="001"
                dateComponent={(
                  <div
                    style={{
                      display: 'block',
                      float: 'left',
                      padding: '10px',
                      background: 'white',
                      color: '#222',
                    }}
                  >
                  {this.state.info[0] ? (
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="mr-3"
                      src={this.state.info[0].picture}
                    />
                    <Media.Body>
                      <h5>{ this.state.info[0] ? <p>{this.state.info[0].userName}</p> : <p>NULL First</p> }</h5>
                    </Media.Body>
                    </Media>
                    ) : (<h3>No friends found! </h3>)}
                  </div>
                )}
                >
                <Card style = {{ width: '25rem'}}>
                <ListGroup variant="flush">
                  <ListGroup.Item  style={{background: "#A1D6E2"}}>
                    <CardGroup id="posts">
                      <Card style={{background: "#66A5AD"}}>
                        <Card.Img height={300} variant="top" src={post.picture} />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            {post.caption}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Posted Today</small>
                        </Card.Footer>
                      </Card>
                    </CardGroup>
                  </ListGroup.Item>
                  <ListGroup.Item  style={{background: "#A1D6E2"}}>

                    <ButtonToolbar>
                    <Button variant="outline-primary">Like</Button>
                    <Button variant="outline-secondary">Comment</Button>
                    <Button variant="outline-success">Share</Button>
                    </ButtonToolbar>

                  </ListGroup.Item>
                </ListGroup>
                </Card>
                </TimelineItem>
            </div>
          )
        }) }

      </div>
    )
  }

  post = post => evt => {
      return (
            <Card>
              <Card.Img variant="top" src={post.picture}/>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{this.props.post.caption}</ListGroupItem>
                    <ListGroupItem>{this.props.post.post}</ListGroupItem>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>

      )
  }

  render(){
    console.log(this.props.post);
    return (
      <div>
      <Timeline lineColor={'#ddd'}>
        <this.post post={this.props.post}/>
      </Timeline>
      </div>
    )
  }
}

export default withCookies(TimelineDetails);
