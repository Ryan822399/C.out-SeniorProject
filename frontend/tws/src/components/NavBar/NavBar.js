import React,{useState, useRef} from "react";
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

var homepage = process.env.FRONTEND_WEB + '/homepage/feed';
var profile = process.env.FRONTEND_WEB + '/homepage/profile';
var graphs = process.env.FRONTEND_WEB + '/homepage/graphs';
var forum = process.env.FRONTEND_WEB + '/homepage/forum';

console.log("HOMEPAGE");
console.log(homepage);

function NavBar(props) {
    return (
      <div>
        <Navbar style={{background: "#6c757d"}} bg="" variant="dark">
            <Navbar.Brand href={homepage}>
            <h3 style={{marginLeft: "20px"}}>
              <FontAwesome name="heartbeat" />
            <span style={{color: "#222"}}>TWS</span>
            </h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={{color: "#222"}} href='{process.env.REACT_APP_API_URL}/homepage/profile'>Profile</Nav.Link>
              <Nav.Link style={{color: "#222"}} href={graphs}>Progress</Nav.Link>

              <Nav.Link style={{color: "#222"}} href={forum}>Public Forum</Nav.Link>
            </Nav>
            <Form inline>
              <Button style={{marginRight: "20px"}} href={process.env.FRONTEND_WEB} variant="dark">
                Sign Out
              </Button>
            </Form>
        </Navbar>
      </div>

    )
}

export default NavBar;
