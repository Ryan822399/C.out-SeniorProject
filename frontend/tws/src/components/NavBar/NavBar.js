import React from 'react';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

function NavBar(props) {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3000/homepage/profile">Profile</Nav.Link>
            <Nav.Link href="http://localhost:3000/homepage/graphs">Progress</Nav.Link>
            <Nav.Link href="http://localhost:3000/homepage/friends">Friends</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
      </Navbar>
      </div>

    )
}

export default NavBar;
