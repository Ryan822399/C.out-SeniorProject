import React, {Component} from 'react';
import Transformation from 'react';
import '../../css/HomePage.css';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Card} from 'react-bootstrap';

class HomePage extends Component {
  render() {
    console.log(this.props)
      return (
        <div>
          
          <Container>
            <Row>
              <Col></Col>
              <Col xl={8}>
                <br/>
                <Card bg="dark" text="white">
                  <Card.Header>
                    <img
                      alt=""
                      src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' Joe Goldberg'}
                  </Card.Header>
                  <Card.Img variant="top" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Doing sit ups at the gym
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card bg="dark" text="white">
                  <Card.Header>
                    <img
                      alt=""
                      src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' Joe Goldberg'}
                  </Card.Header>
                  <Card.Img variant="top" src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Figured I shoudl post a picture of myself!
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card bg="dark" text="white">
                  <Card.Header>
                    <img
                      alt=""
                      src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' Joe Goldberg'}
                  </Card.Header>
                  <Card.Img variant="top" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/580x350/Secrets+of+People+Who+Love+to+Work+Out/Secret+8.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Sunday morning group workout
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />
              </Col>
              <Col></Col>
            </Row>
          </Container>

        </div>
      )
    }
  }
export default HomePage;
