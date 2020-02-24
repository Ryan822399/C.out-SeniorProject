import React from 'react';
import {Tab, Nav, Row, Col, Card } from 'react-bootstrap';

function ForumTabs(props) {
let act, thiAct, forAct, secAct;
if (props.act === "first")
{
  act = true
  secAct = false
  thiAct = false
  forAct = false
}else if(props.act === "second")
{
  act = false
  secAct = true
  thiAct = false
  forAct = false
}else if(props.act === "third")
{
  act = false
  secAct = false
  thiAct = true
  forAct = false
}else if(props.act === "forth")
{
  act = false
  secAct = false
  thiAct = false
  forAct = true
}

return (

  <Card.Header>
    <Nav variant="tabs" className="flex-row" activeKey="first"
      onSelect={selectedKey => props.changeTabs(selectedKey)}>
      <Nav.Item>
        <Nav.Link active={act} eventKey="first" >Flexibility</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={secAct} eventKey="second">Diet</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={thiAct} eventKey="third" >Cardio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={forAct} eventKey="forth">Weights</Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>

);
}

export default ForumTabs;
