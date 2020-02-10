import React, {Component} from 'react';
import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Card} from 'react-bootstrap';

class HomePage extends Component {
  render() {
      return (
        <div>
          <body>
            <Navbar className="navigation" bg="light" expand="lg">
            <Navbar.Brand href="http://localhost:3000/HomePage">
              <img
                alt=""
                src="https://serfob.s3.amazonaws.com/media/green-heart-line-logo2f7-02d9-4abe-a196-7ea85144c284.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
                <Navbar.Brand id="top" href="http://localhost:3000/HomePage">TWS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>
                    <Nav.Link href="#Friends">Friends</Nav.Link>
                    <Nav.Link href="http://localhost:3000/graphs">Graphs</Nav.Link>
                    <Nav.Link href="http://localhost:3000/workouts">Workouts</Nav.Link>
                    <Nav.Link href="#Timeline">Timeline</Nav.Link>
                    <Nav.Link href="#PublicForum">Public Forum</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#top">Top</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#posts">Posts</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
            </body>

          <Container>
            <Row>
              <Col></Col>

              <Col xl={8}>
                <br/>
                <br/>
                <Card bg="dark" text="white">
                  <Card.Header>
                  <Image src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg" fluid rounded /> Mark Rungal
                  </Card.Header>
                  <Card.Img variant="top" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Articles/Twice+a+Day/man+working+out-carousel.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Example Post
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card bg="dark" text="white">
                  <Card.Header>
                  Profile
                  </Card.Header>
                  <Card.Img variant="top" src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Example Post
                    </Card.Text>
                  </Card.Body>
                </Card>
                <br />

                <Card bg="dark" text="white">
                  <Card.Header>
                  Profile
                  </Card.Header>
                  <Card.Img variant="top" src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/580x350/Secrets+of+People+Who+Love+to+Work+Out/Secret+8.jpg" />
                  <Card.Body>
                    <Card.Text>
                      Example Post
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
