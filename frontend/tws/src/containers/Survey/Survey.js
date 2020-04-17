import React , {Component} from 'react';
import DonutChart from '../../components/Visuals/DonutChart/DonutChartWrapper';
import {Row, Col} from 'react-bootstrap';
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
          console.log("value of x", this.state.x)
          this.state.x += .1

        if(this.state.x >= 1) {
          this.setState({x:0})
        }
      }, 10000);
      return progress
  }
  render () {



    return (
      <div>
      <NavBar/>
      <Row>
      <Col>
        <h3>heelo</h3>
      </Col>
      <Col>
            {this.update()}
      </Col>
      </Row>
      </div>
    );
  }
}
