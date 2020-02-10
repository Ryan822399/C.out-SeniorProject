import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Line} from 'chartjs-plugin-lineheight-annotation'
//import "chartjs-plugin-lineheight-annotation";  

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';



class Graphs extends Component {

  render() {
    function Color() {
      let styles = {
        color: 'black',
      };
    }
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
        </div>

    )
  }
}

export default Graphs;