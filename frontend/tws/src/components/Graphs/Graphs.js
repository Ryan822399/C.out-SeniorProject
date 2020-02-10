import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Profile.css';
import {Line} from 'react-chartjs-2'
import "chartjs-plugin-lineheight-annotation";  

import {Image, Navbar, Nav, NavDropdown, Form, FormControl, Button, Media, Card, CardGroup} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';



class Graphs extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Workout #1",
                        backgroundColor: "rgba(255, 0, 255, 0.75",
                        data: [4, 5, 1, 12, 20, 2, 16]
                    },
                    {
                        label: "Workout #2",
                        backgroundColor: "rgba(0, 255, 0, 255)",
                        data: [14, 18, 5, 0, 22, 1, 13]
                    }
                ]
            }
        }
    }

    setGradientColor = (canvas, color) => {
        const context = canvas.getContext('2d');
        const gradient = context.createLinearGradient(0, 0, 200, 400);
      //  gradient.addColorStop(0, color);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
        return gradient;
    }

    getChartData = canvas => {
        const data = this.state.data;
        if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75", "rgba(0, 0, 255, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            });
        }
        return data;
    }

  render() {
    function Color() {
      let styles = {
        color: 'black',
      };
    }
    return (
    
    <div>
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
        </div> 
        <div style = {{position: "relative", width: 600, height: 550}}>    
            <h3>Graph Samples</h3> 
            <Line 
                options ={{
                    responsive: true,
                    lineHeightAnnotation: {
                        always: false,
                        hover: true
                    }
                }}
                data = {this.getChartData}
            />

        </div>
    </div>
    )
  }
}

export default Graphs;