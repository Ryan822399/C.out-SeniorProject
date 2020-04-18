import React , {Component} from 'react';
import DonutChart from '../../components/Visuals/DonutChart/DonutChartWrapper';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class Survey extends Component {
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
      user: this.props.cookies.get('tws-id'),
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

  handleFormSubmit = event => {
    //event.preventDefault()
    //console.log(this.state.attributes);
    let form_data = new FormData();
    form_data.append('userName', this.state.attributes.userName);
    form_data.append('firstName', this.state.attributes.firstName);
    form_data.append('lastName', this.state.attributes.lastName);
    form_data.append('email', this.state.attributes.email);
    form_data.append('bio', this.state.attributes.bio);
    form_data.append('heightFeet', this.state.attributes.heightFeet);
    form_data.append('heightInches', this.state.attributes.heightInches);
    form_data.append('dob', this.state.attributes.dob);
    form_data.append('location', this.state.attributes.location);
    form_data.append('picture', this.state.attributes.picture);
    form_data.append('accountType', this.state.attributes.accountType);
    form_data.append('user', this.state.attributes.user);
    let url = 'http://localhost:8000/api/profiles/';

    axios.put(`${process.env.REACT_APP_API_URL}/api/profile/${this.state.attributes.user}/`, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };



  inputChanged = event => {
    let att = this.state.attributes;
    att[event.target.name] = event.target.value;
    this.setState({attributes: att});
    console.log("ATTRIBUTES");
    console.log(this.state.attributes);
  }

  handleImageChange = event => {
    console.log(event.target.files[0]);
    let att = this.state.attributes;
    att[event.target.name] = event.target.files[0];
    this.setState({attributes: att});
  };

  transition = val => () => {
    if(val === "next") {
    this.update()
    }else { this.redo();}
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

  form1 = evt => {
    let display;
    if(this.state.userName == "") {
      display = "Enter Username";
      console.log("false");
    }
    else {
      display = this.state.userName;
      console.log("True");
    }
    console.log(display);
    return (
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control as="input" name="userName" type="userName" placeholder="Enter Username" value={this.state.userName} onChange={this.inputChanged} required/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control as="input" name="email" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.inputChanged} required/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="dark">
              Back
            </Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button variant="dark" onClick={ this.transition("next")}>
            Next
          </Button>
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
          <Form.Control as="input" name="firstName" type="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.inputChanged} required/>
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control as="input" name="lastName" type="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.inputChanged} required/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="dark" onClick={this.transition("back")}>
              Back
            </Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button variant="dark" onClick={ this.transition("next")}>
            Next
          </Button>
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
          <Form.Control as="input" name="bio" type="bio" placeholder="Enter Bio" value={this.state.bio} onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control as="input" name="location" type="location" placeholder="Enter Location" value={this.state.location} onChange={this.inputChanged}/>
        </Form.Group>
        <input type="file"
                 id="picture"
                 name="picture"
                 accept="image/png, image/jpeg, image/JPG" onChange={this.handleImageChange} required/>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="dark" onClick={this.transition("back")}>
              Back
            </Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button variant="dark" onClick={ this.transition("next")}>
            Next
          </Button>
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
          <Form.Control as="input" name="dob" type="dob" placeholder={this.state.userName ? this.state.userName : "Enter Date of Birth"} value={this.state.dob} onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicHeightFeet">
          <Form.Label>Height Feet</Form.Label>
          <Form.Control as="input" name="heightFeet" type="heightFeet" placeholder="Enter Height (Feet)" value={this.state.heightFeet} onChange={this.inputChanged}/>
        </Form.Group>
        <Form.Group controlId="formBasicHeightInches">
          <Form.Label>Height Inches</Form.Label>
          <Form.Control as="input" name="heightInches" type="heightInches" placeholder="Enter Height (Inches)" value={this.state.heightInches} onChange={this.inputChanged}/>
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="dark" onClick={this.transition("back")}>
              Back
            </Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <Button variant="dark" onClick={ this.handleFormSubmit} href="http://localhost:3000/homepage/feed">
            Submit
          </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  card1 = () => {
    return (
      <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
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
      <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
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
      <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
      <Card>
        <Card.Body>
          <Card.Title>Tell Us About You?</Card.Title>
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
      <div style={{ paddingTop: '5%', paddingLeft: '5%' }}>
      <Card>
        <Card.Body>
          <Card.Title>Extra Information To Help Us Know You A Little More</Card.Title>
          <Card.Text>
            <this.form4 />
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
  update = () =>
  {
        console.log('This will run every second!');

          console.log("value of x", this.state.x)
          this.state.x += .33
          this.setState({status: {
                startAngle: 0,
                endAngle: this.state.x * (2*Math.PI)
            }})

        if(this.state.x > 1) {
          this.setState({x:0})
        }
  }
  redo = () =>
  {
        console.log('This will run every second!');

          console.log("value of x", this.state.x)
          this.state.x -= .33
          this.setState({status: {
                startAngle: 0,
                endAngle: this.state.x * (2*Math.PI)
            }})

        if(this.state.x > 1) {
          this.setState({x:0})
        }
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
      <div style={{ height: "940px", backgroundColor: "#A9A9A9"}} >
        <NavBar/>
        <div style={{display: "flex", justifyContent: "center",
                      alignItems: "center", margin: "40px"}}>
            <Row>
              <Col xs={12} md={8}>
                {content}
              </Col>
              <Col xs={6} md={4}>
                <DonutChart status={this.state.status}/>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default withCookies(Survey);
