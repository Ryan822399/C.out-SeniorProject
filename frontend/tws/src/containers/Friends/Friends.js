import React, {Component} from 'react';
//import { withCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Container, Image, ListGroup, Button, Card, Form, FormControl, Media, Navbar, Nav, NavDropdown} from 'react-bootstrap';
function Friends(){


    return (
      <div>
      <Container>
        <Card style = {{ width: '20rem'}}>
          <Card.Header>Friend's List</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
              />
              <Media.Body>
                <h5>Bob Joe</h5>
                <p>
                  Online
                </p>
              </Media.Body>
              </Media>
            </ListGroup.Item>
            <ListGroup.Item>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2016/05/family_guy_trump_emmy_campaign_0.jpg"
              />
              <Media.Body>
                <h5>Joe Bob</h5>
                <p>
                  Online
                </p>
              </Media.Body>
              </Media>
            </ListGroup.Item>
            <ListGroup.Item>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://www.nydailynews.com/resizer/n4XDpTyDGkvQpEQle3t1lwIlUaQ=/415x233/top/www.trbimg.com/img-5c3ca7a6/turbine/ny-1547478934-8c63008drk-snap-image"
              />
              <Media.Body>
                <h5>Bobby Jr.</h5>
                <p>
                  Offline
                </p>
              </Media.Body>
              </Media>
            </ListGroup.Item>
            <ListGroup.Item>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://i.ytimg.com/vi/eV5fUPU7zIU/maxresdefault.jpg"
              />
              <Media.Body>
                <h5>Bobby Sr.</h5>
                <p>
                  Offline
                </p>
              </Media.Body>
              </Media>
            </ListGroup.Item>
          </ListGroup>
          <Form>
          <Form.Group controlId="formBasicInput">
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Button variant="outline-success" type="submit" block>
            Add Friend
          </Button>
          <Button variant="outline-success" type="submit" block>
            Remove Friend
          </Button>
          </Form>
        </Card>
      </Container>
      </div>
    )
  }



export default Friends
