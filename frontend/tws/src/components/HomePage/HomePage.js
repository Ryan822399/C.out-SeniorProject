import React, {Component} from 'react';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';

class HomePage extends Component {
  render() {
      return (
        <div>
          <body>
            <Navbar className="navigation" bg="light" expand="lg">
              <Navbar.Brand id="top" href="http://localhost:3000/HomePage">TWS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
                  <Nav.Link href="#Friends">Friends</Nav.Link>
                  <Nav.Link href="#Graphs">Graphs</Nav.Link>
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
export default HomePage;
