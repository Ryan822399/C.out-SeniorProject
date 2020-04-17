import React , {Component} from 'react';
import DonutChart from '../../components/Visuals/DonutChart/DonutChartWrapper';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';

export default class Survey extends Component {
  state = {
    status: {
      startAngle: 0,
      endAngle: 0
    },
    x: 0,
    card1: true,
    card2: false,
    card3: false,
    card4: false,
    attributes: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      heightFeet: 0,
      heightInches: 0,
      dob: "",
      location: "",
      picture: "",
      accountType: "private"
    }
  }

  update = () =>
  {
      let progress = <DonutChart status={this.state.status}/>
    setInterval(() => {
        console.log('This will run every second!');
        this.setState({status: {
              startAngle: 0,
              endAngle: this.state.x * (2*Math.PI)
          }})
          progress = <DonutChart status={this.state.status}/>

          this.state.x += .1

        if(this.state.x >= 1) {
          this.setState({x:0})
        }
      }, 10000);
      return progress
  }

  inputChanged = event => {
    let att = this.state.attributes;
    att[event.target.name] = event.target.value;
    this.setState({attributes: att});
  }

  handleImageChange = event => {
    console.log(event.target.files[0]);
    let att = this.state.attributes;
    att[event.target.name] = event.target.files[0];
    this.setState({attributes: att});
  };

  transition = val => () => {
    if(val == "next") {
      if(this.state.card1) {
        this.setState({card1: false})
        this.setState({card2: true})
      }
      else if(this.state.card2) {
        this.setState({card2: false})
        this.setState({card3: true})
      }
      else if(this.state.card3) {
        this.setState({card3: false})
        this.setState({card4: true})
      }
      else {
        this.setState({card4: false})
      }
    }
    else {
      if(this.state.card2) {
        this.setState({card2: false})
        this.setState({card1: true})
      }
      else if(this.state.card3) {
        this.setState({card3: false})
        this.setState({card2: true})
      }
      else {
        this.setState({card4: false})
        this.setState({card3: true})
      }
    }
  }

  form1 = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="userName" placeholder="Enter Username" value={this.state.userName} onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" onChange={this.inputChanged}/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <p>
              Back
            </p>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <p  onClick={this.transition("next")}>
            Next
          </p>
          </Col>
        </Row>
      </Form>
    )
  }

  form2 = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter First Name" onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Enter Last Name" onChange={this.inputChanged}/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <p onClick={this.transition("back")}>
              Back
            </p>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <p onClick={this.transition("next")}>
            Next
          </p>
          </Col>
        </Row>
      </Form>
    )
  }

  form3 = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicBio">
          <Form.Label>Bio</Form.Label>
          <Form.Control type="bio" placeholder="Enter Bio" onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="location" placeholder="Enter Location" onChange={this.inputChanged}/>
        </Form.Group>
        <input type="file"
                 id="picture"
                 name="picture"
                 accept="image/png, image/jpeg, image/JPG" onChange={this.handleImageChange}/>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <p onClick={this.transition("back")}>
              Back
            </p>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <p onClick={this.transition("next")}>
            Next
          </p>
          </Col>
        </Row>
      </Form>
    )
  }

  form4 = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="DOB" placeholder="Enter Date of Birth" onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicHeightF">
          <Form.Label>Height Feet</Form.Label>
          <Form.Control type="heightF" placeholder="Enter Height (Feet)" onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicHeightI">
          <Form.Label>Height Inches</Form.Label>
          <Form.Control type="heightI" placeholder="Enter Height (Inches)" onChange={this.inputChanged}/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <p onClick={this.transition("back")}>
              Back
            </p>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <p onClick={this.transition("next")}>
            Next
          </p>
          </Col>
        </Row>
      </Form>
    )
  }

  card1 = () => {
    return (
      <div style={{ paddingTop: '30px' }}>
      <Card>
        <Card.Body>
          <Card.Title>What Should You Go By?</Card.Title>
          <Card.Text>
            <this.form1 />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }

  card2 = () => {
    return (
      <div style={{ paddingTop: '30px' }}>
      <Card>
        <Card.Body>
          <Card.Title>Please Enter Your Name</Card.Title>
          <Card.Text>
            <this.form2 />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }

  card3 = () => {
    return (
      <div style={{ paddingTop: '30px' }}>
      <Card>
        <Card.Body>
          <Card.Title>What is your Username?</Card.Title>
          <Card.Text>
            <this.form3 />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }

  card4 = () => {
    return (
      <div style={{ paddingTop: '30px' }}>
      <Card>
        <Card.Body>
          <Card.Title>What is your Username?</Card.Title>
          <Card.Text>
            <this.form4 />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
  render () {

    let content;
    if(this.state.card1) {
        content = <this.card1 />;
    }
    else if(this.state.card2) {
        content = <this.card2 />;
    }
    else if(this.state.card3) {
        content = <this.card3 />;
    }
    else {
        content = <this.card4 />;
    }

    return (
      <div>
      <NavBar/>
      <Row>
        <Col>
          {content}
        </Col>
        <Col>
          {this.update()}
        </Col>
      </Row>
      </div>
    );
  }
}
