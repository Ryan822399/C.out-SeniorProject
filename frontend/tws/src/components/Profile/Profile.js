import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';



class Profile extends Component {
  //1:
  //const usertest = this.props.usertest;

  //2:
  /*
  getName = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/usertest/${this.props.usertest.firstName}/`, {
      method: 'GET'
    })
  }
  */
  state = {
    firstName: null
  }

  componentDidMount() {
      fetch(`${process.env.REACT_APP_API_URL}/api/userTest/`, {
        method: 'GET'
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch( error => console.log(error))
    console.log("IN MOUNT");
    console.log(this.state.firstName);
  }


  render() {
    console.log("IN RENDER");
    console.log(this.state.firstName);
    return (
      <div>

        <body>
          <Navbar className="navigation" bg="light" expand="lg">
          <Navbar.Brand href="http://localhost:3000/HomePage">
            <img
              alt=""
              src="https://serfob.s3.amazonaws.com/media/green-heart-line-logo2f7-02d9-4abe-a196-7ea85144c284.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
              <Navbar.Brand id="top" href="http://localhost:3000/HomePage">TWS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
                  <Nav.Link href="#Friends">Friends</Nav.Link>
                  <Nav.Link href="http://localhost:3000/graphs">Graphs</Nav.Link>
                  <Nav.Link href="http://localhost:3000/workouts">Workouts</Nav.Link>
                  <Nav.Link href="#Timeline">Timeline</Nav.Link>
                  <Nav.Link href="#PublicForum">Public Forum</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#top">Top</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#posts">Posts</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
        </body>

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
              { !this.state.firstName ? <p>{this.state.firstName}</p> : <p>Test</p> }
            </h4>
            <h5>
              @PeterGriffin
            </h5>
            <p>
              Peter Griffin is the main character of the American animated sitcom Family Guy. He is voiced by the series' creator, Seth MacFarlane, and first appeared on television, along with the rest of the Griffin family, in the 15-minute pilot pitch of Family Guy on December 20, 1998. Peter was created and designed by MacFarlane himself. MacFarlane was asked to pitch a pilot to the Fox Broadcasting Company based on Larry & Steve, a short made by MacFarlane which featured a middle-aged character named Larry and an intellectual dog, Steve. After the pilot was given the green light, the Griffin family appeared in the episode "Death Has a Shadow".
            </p>
          </Media.Body>
        </Media>

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
