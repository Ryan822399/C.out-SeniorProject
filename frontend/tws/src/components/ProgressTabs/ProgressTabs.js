import React from 'react';
import {Tab, Nav, Row, Col, Card } from 'react-bootstrap';

function ProgressTabs(props) {
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
}

return (

  <Card.Header>
    <Nav variant="tabs" className="flex-row" activeKey="first"
      onSelect={selectedKey => props.changeTabs(selectedKey)}>
      <Nav.Item>
        <Nav.Link active={act} eventKey="first" >My Progress</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active={secAct} eventKey="second">Group Progress</Nav.Link>
      </Nav.Item>

    </Nav>
  </Card.Header>

);
}

export default ProgressTabs;
