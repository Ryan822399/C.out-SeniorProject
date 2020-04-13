import React, {Component, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, Modal, CardDeck, Row, Col, InputGroup, Overlay, Popover, OverlayTrigger} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import UserSearchButton from '../UserSearchButton/UserSearchButton'
import axios from 'axios';

function UserSearch(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>
    <Button variant="dark" block onClick={handleShow}>
      Search for User
    </Button>

    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Body >
      <Row>
        <Col>
          <UserSearchButton/>
        </Col>
      </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

}

export default UserSearch;
