import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';

import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

class Profile extends Component {



  render() {
    return (
      <div>
        <header className="Header">
          <h1>Profile</h1>
        </header>
        <body className="Body">
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
      </div>
    )
  }
}

//ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))

export default Profile;
