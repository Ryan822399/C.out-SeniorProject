import React from 'react';
import {Tab, Nav, Row, Col, Card } from 'react-bootstrap';

function ForumTabs(props) {
let act, thiAct, forAct, secAct;
if (props.act === "flex")
{
  act = true
  secAct = false
  thiAct = false
  forAct = false
}else if(props.act === "diet")
{
  act = false
  secAct = true
  thiAct = false
  forAct = false
}else if(props.act === "cardio")
{
  act = false
  secAct = false
  thiAct = true
  forAct = false
}else if(props.act === "weight")
{
  act = false
  secAct = false
  thiAct = false
  forAct = true
}

return (

  <Card.Header>
    <Nav variant="tabs" className="flex-row" activeKey="flex"
      onSelect={selectedKey => props.changeTabs(selectedKey)}>
      <Nav.Item>
        <Nav.Link active={act} eventKey="flex" >Flexibility</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={secAct} eventKey="diet">Diet</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={thiAct} eventKey="cardio" >Cardio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={forAct} eventKey="weight">Weights</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>

);
}

export default ForumTabs;
