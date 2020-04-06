import React,{useState, useRef} from "react";
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');


function NavBar(props) {
    return (
      <div>
        <Navbar style={{background: "#A1D6E2"}} bg="" variant="dark">
            <Navbar.Brand href="http://localhost:3000/homepage/feed">
            <h3>
              <FontAwesome name="heartbeat" />
            <span style={{color: "#222"}}>TWS</span>
            </h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/profile/?id">Profile</Nav.Link>
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/graphs">Progress</Nav.Link>
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/friends">Friends</Nav.Link>
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/timeline">Timeline</Nav.Link>
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/forum">Public Forum</Nav.Link>
            </Nav>
            <Form inline>
              <Button variant="dark">
                <Nav.Link href="http://localhost:3000">Sign Out</Nav.Link>
              </Button>
            </Form>
        </Navbar>
      </div>

    )
}

export default NavBar;
