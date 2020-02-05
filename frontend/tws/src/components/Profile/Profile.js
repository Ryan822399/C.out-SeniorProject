import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Profile extends Component {



  render() {
    return (
      <div>
      <h1>Test Profile Page</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/81dhrXbZyDL._AC_SY355_.jpg" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" thumbnail />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

//ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))

export default Profile;
