import React,{useState, useRef} from "react";
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');


function NavBar(props) {
    return (
      <div>
        <Navbar style={{background: "#6c757d"}} bg="" variant="dark">
            <Navbar.Brand href="http://localhost:3000/homepage/feed">
            <h3 style={{marginLeft: "20px"}}>
              <FontAwesome name="heartbeat" />
            <span style={{color: "#222"}}>TWS</span>
            </h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/profile/?id">Profile</Nav.Link>
              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/graphs">Progress</Nav.Link>

              <Nav.Link style={{color: "#222"}} href="http://localhost:3000/homepage/forum">Public Forum</Nav.Link>
            </Nav>
            <Form inline>
              <Button style={{marginRight: "20px"}} href="http://localhost:3000" variant="dark">
                Sign Out
              </Button>
            </Form>
        </Navbar>
      </div>

    )
}

export default NavBar;
