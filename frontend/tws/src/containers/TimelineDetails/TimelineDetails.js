import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Container, Image, ListGroup, Button, ButtonToolbar, Card, CardGroup, Form, FormControl, Media, Navbar, Nav, NavDropdown} from 'react-bootstrap';
//import Fri from '../src/components/Friends.js';



function TimelineDetails(props) {

    return (
      <div>
      <Timeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateComponent={(
          <div
            style={{
              display: 'block',
              float: 'left',
              padding: '10px',
              background: 'rgb(150, 150, 150)',
              color: '#fff',
            }}
          >
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
            />
            <Media.Body>
              <h5>Bob Joe</h5>
              <p>
                20 Hours Ago
              </p>
            </Media.Body>
            </Media>
          </div>
        )}
        >
        <Card style = {{ width: '35rem'}}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
              exercitation. Veniam velit adipisicing anim excepteur nostrud magna
              nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
              reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
              est.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>
            <ButtonToolbar>
            <Button variant="outline-primary">Like</Button>
            <Button variant="outline-secondary">Comment</Button>
            <Button variant="outline-success">Share</Button>
            </ButtonToolbar>
            </p>
          </ListGroup.Item>
        </ListGroup>
        </Card>
        </TimelineItem>
        <TimelineItem
        key="002"
        dateComponent={(
        <div
        style={{
        display: 'block',
        float: 'left',
        padding: '10px',
        background: 'rgb(150, 150, 150)',
        color: '#fff',
        }}
        >
        <Media>
        <img
        width={64}
        height={64}
        className="mr-3"
        src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
        />
        <Media.Body>
        <h5>Bob Joe</h5>
        <p>
        1 Day Ago
        </p>
        </Media.Body>
        </Media>
        </div>
        )}
        >
        <Card style = {{ width: '35rem'}}>
        <ListGroup variant="flush">
        <ListGroup.Item>
        <p>
        <Card.Img variant="top" src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080" />
        </p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
        </p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p>
        <ButtonToolbar>
        <Button variant="outline-primary">Like</Button>
        <Button variant="outline-secondary">Comment</Button>
        <Button variant="outline-success">Share</Button>
        </ButtonToolbar>
        </p>
        </ListGroup.Item>
        </ListGroup>
        </Card>
        </TimelineItem>
        <TimelineItem
        key="003"
        dateComponent={(
        <div
        style={{
        display: 'block',
        float: 'left',
        padding: '10px',
        background: 'rgb(150, 150, 150)',
        color: '#fff',
        }}
        >
        <Media>
        <img
        width={64}
        height={64}
        className="mr-3"
        src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
        />
        <Media.Body>
        <h5>Bob Joe</h5>
        <p>
        2 Days Ago
        </p>
        </Media.Body>
        </Media>
        </div>
        )}
        >
        <Card style = {{ width: '35rem'}}>
        <ListGroup variant="flush">
        <ListGroup.Item>
        <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
        scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
        vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
        vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p>
        <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
        />
        <Media.Body>
          <h5>Explosion</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>

          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
            />
            <Media.Body>
              <h5>Walking</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                vulputate fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
        </Media>
        </p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p>
        <ButtonToolbar>
        <Button variant="outline-primary">Like</Button>
        <Button variant="outline-secondary">Comment</Button>
        <Button variant="outline-success">Share</Button>
        </ButtonToolbar>
        </p>
        </ListGroup.Item>
        </ListGroup>
        </Card>
        </TimelineItem>
        <TimelineItem
        key="001"
        dateComponent={(
        <div
        style={{
        display: 'block',
        float: 'left',
        padding: '10px',
        background: 'rgb(150, 150, 150)',
        color: '#fff',
        }}
        >
        <Media>
        <img
        width={64}
        height={64}
        className="mr-3"
        src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080"
        />
        <Media.Body>
        <h5>Bob Joe</h5>
        <p>
        3 Days Ago
        </p>
        </Media.Body>
        </Media>
        </div>
        )}
        >
        <Card style = {{ width: '35rem'}}>
        <ListGroup variant="flush">
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080" />
          <Card.Body>
            <Card.Title>Explosion</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080" />
          <Card.Body>
            <Card.Title>Walking</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://s2.dmcdn.net/v/K-vxh1PQOdCNPyzJR/x1080" />
          <Card.Body>
            <Card.Title>Cake</Card.Title>
          </Card.Body>
        </Card>
        </CardGroup>
        <ListGroup.Item>
        <p>
        <ButtonToolbar>
        <Button variant="outline-primary">Like</Button>
        <Button variant="outline-secondary">Comment</Button>
        <Button variant="outline-success">Share</Button>
        </ButtonToolbar>
        </p>
        </ListGroup.Item>
        </ListGroup>
        </Card>
        </TimelineItem>
      </Timeline>
      </div>
    )

}

export default TimelineDetails;
