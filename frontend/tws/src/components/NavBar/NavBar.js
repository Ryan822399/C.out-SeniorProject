import React,{useState, useRef} from "react";
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');



function NavBar(props) {
  var homepage = process.env.REACT_APP_FRONTEND_WEB;
  var profile = process.env.REACT_APP_FRONTEND_WEB + '/homepage/profile';
  var graphs = process.env.REACT_APP_FRONTEND_WEB + '/homepage/graphs';
  var forum = process.env.REACT_APP_FRONTEND_WEB + '/homepage/forum';

  console.log("HOMEPAGE");
  console.log(homepage);
    return (
      <div>
        <Navbar style={{background: "#6c757d"}} bg="" variant="dark">
            <Navbar.Brand href={`${process.env.REACT_APP_FRONTEND_WEB}/homepage/feed/`}>
            <h3 style={{marginLeft: "20px"}}>
              <FontAwesome name="heartbeat" />
            <span style={{color: "#222"}}>TWS</span>
            </h3>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={{color: "#222"}} href={profile}>Profile</Nav.Link>
              <Nav.Link style={{color: "#222"}} href={graphs}>Progress</Nav.Link>

              <Nav.Link style={{color: "#222"}} href={forum}>Public Forum</Nav.Link>
            </Nav>
            <Form inline>
              <Button style={{marginRight: "20px"}} href={homepage} variant="dark">
                Sign Out
              </Button>
            </Form>
        </Navbar>
      </div>

    )
}

export default NavBar;
