import React,{useState, useRef} from "react";
import './NavBar.css';
import PostButton from '../PostButton/PostButton';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');


function NavBar(props) {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="http://localhost:3000/homepage/feed">
            <h3>
              <FontAwesome name="heartbeat" />
            <span>TWS</span>
            </h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="http://localhost:3000/homepage/profile">Profile</Nav.Link>
              <Nav.Link href="http://localhost:3000/homepage/graphs">Progress</Nav.Link>
              <Nav.Link href="http://localhost:3000/homepage/friends">Friends</Nav.Link>
              <Nav.Link href="http://localhost:3000/homepage/timeline">Timeline</Nav.Link>
              <Nav.Link href="http://localhost:3000/homepage/forum">Public Forum</Nav.Link>
            </Nav>
          
        </Navbar>
      </div>

    )
}

export default NavBar;
