import React from 'react';
import { Card, Accordion, Button, InputGroup, FormControl} from 'react-bootstrap';

export default function ForumComments(props) {
  return(
    <Accordion >
          <Card >
          <Card.Header >
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Comments
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter a nice comment"
              aria-label="Enter a nice comment"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Submit</Button>
            </InputGroup.Append>
          </InputGroup>
            Hello! I'm the body

            </Card.Body>
          </Accordion.Collapse>
          </Card>
      </Accordion>
  );
}
