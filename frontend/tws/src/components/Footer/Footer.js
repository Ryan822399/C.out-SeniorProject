import React from 'react';
import './Footer.css';
import { Jumbotron, Button } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');
const style = {
    position: "bottom",
    background: "#222",
    textAlign: "center",
}
function Footer(props) {
  return (
    <footer>

      <Jumbotron style={{background: "#222", color: "#1BFFFF", position: "bottom", textAlign: "center"}}>
        <h4>TWS</h4>
        <div>Ryan Hennes</div>
        <div>Anthony Diaz</div>
        <div>Tristan Chen-Cota</div>
        <div>William Jorgensen</div>
        <div>Andre Barajas</div>
      
      </Jumbotron>

    </footer>
  )
}

export default Footer;
