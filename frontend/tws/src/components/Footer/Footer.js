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

      <Jumbotron style={style, {background: "#222", color: "#1BFFFF", position: "bottom", textAlign: "center"}}>
        <h4>TWS</h4>
        <div>Ryan Hennes</div>
        <div>Anthony Diaz</div>
        <div>Tristan Chen-Cota</div>
        <div>William Jorgensen</div>
        <div>Andre Barajas</div>
        <p></p>
        <p>
          1250 Bellflower Boulevard
          Long Beach, California 90840
          562.985.4111
        </p>
      </Jumbotron>

    </footer>
  )
}

export default Footer;
