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
    x: 0
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

  form = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="userName" placeholder="Enter Username" />
        </Form.Group>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="primary" type="back">
              Back
            </Button>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }}>
            <Button variant="primary" type="next">
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  card = () => {
    return (
      <Card style={{ width: '' }}>
        <Card.Body>
          <Card.Title>What is your Username?</Card.Title>
          <Card.Text>
            <this.form />
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  render () {



    return (
      <div>
      <NavBar/>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <this.card />
            </Col>
            <Col>
                  {this.update()}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      </div>
    );
  }
}
