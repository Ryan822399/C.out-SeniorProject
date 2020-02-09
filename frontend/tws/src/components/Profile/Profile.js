import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';



class Profile extends Component {

  render() {
    function Color() {
      let styles = {
        color: 'black',
      };
    }
    return (

      <div>
        <Navbar className="navigation" bg="light" expand="lg">
          <Navbar.Brand href="#home">TWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Profile</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Media>
          <img
            width={384}
            height={384}
            className="mr-3"
            src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
            alt="Joker Peter Griffin"
          />
          <Media.Body>
            <h5>
              Peter Griffin (Joker)
            </h5>
            <p>
              Peter Griffin is the main character of the American animated sitcom Family Guy. He is voiced by the series' creator, Seth MacFarlane, and first appeared on television, along with the rest of the Griffin family, in the 15-minute pilot pitch of Family Guy on December 20, 1998. Peter was created and designed by MacFarlane himself. MacFarlane was asked to pitch a pilot to the Fox Broadcasting Company based on Larry & Steve, a short made by MacFarlane which featured a middle-aged character named Larry and an intellectual dog, Steve. After the pilot was given the green light, the Griffin family appeared in the episode "Death Has a Shadow".
            </p>
          </Media.Body>
        </Media>
        <h3>
          Posts
        </h3>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/eV5fUPU7zIU/maxresdefault.jpg" />
            <Card.Body>
              <Card.Title>Forcing My Wife To Eat</Card.Title>
              <Card.Text>
                This was a pretty fun experience even though I almost got her killed. #tbt
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.nydailynews.com/resizer/n4XDpTyDGkvQpEQle3t1lwIlUaQ=/415x233/top/www.trbimg.com/img-5c3ca7a6/turbine/ny-1547478934-8c63008drk-snap-image" />
            <Card.Body>
              <Card.Title>Peter Griffin vs. Donald Trump</Card.Title>
              <Card.Text>
                What can I say? I showed him the hands.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSflIQPy04nkBdQf-LAPsDmvhiKruzqPiHX-IwCjEUHxZHw4wNZ" />
            <Card.Body>
              <Card.Title>Peter The Hedgehog</Card.Title>
              <Card.Text>
                #GottaGoFast
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

        {/*
        <header>
          <h1>TWS</h1>
          <h2>@MemeLord</h2>
        </header>
        <body className="body">
          <div className="profileHeader">
            <img className="profileImage" src="https://i.kym-cdn.com/photos/images/original/001/582/190/6d2.png" alt=""/>
            <div className="box">
              <h3 className="post">Posts</h3>
              <p>100</p>
            </div>
            <div className="box">
              <h3 className="friend">Friends</h3>
              <p>100</p>
            </div>
            <p className="name">Meme Lord</p>
            <p className="bio">Something interesting that is suppose to go here</p>
          </div>
        </body>
        /*}



        {/*
        <header className="Header">
          <h1>Profile</h1>
        </header>
        <body className="Body">
          <Image className="Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjppfA7BzNkdWvrBee98IiB3QemywIRsVfQJ0FSVMHwjvj7lTk" fluid />
          <Card className="UserProfile" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://fyf.tac-cdn.net/images/products/large/BF116-11KM_R.jpg?auto=webp&quality=60" />
            <Card.Body className="UserBody">
              <Card.Title className="Username">Master</Card.Title>
              <Card.Text className="UserBio">
                The Master is the Master of all Masters.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Joined February 6th, 2020</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </body>
        */}
      </div>
    )
  }
}

export default Profile;
