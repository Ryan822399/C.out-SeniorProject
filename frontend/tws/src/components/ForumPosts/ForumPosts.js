import React from 'react';
import { CardGroup, Card  } from 'react-bootstrap';

function ForumPosts(props) {
  return (
<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>How does cardio effect your bod</Card.Title>
      <Card.Text>
        How often should I do cardio if I want to be fit like Lebron James?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Are pull ups good for your health?</Card.Title>
      <Card.Text>
        Why is it so hard to do a pull and why can't I reach the bar after a meal or two.
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>

    <Card.Body>
      <Card.Title>What is good form for lunges?</Card.Title>
      <Card.Text>
        Is it true lunges are for the strong and not for the weak or can you be in between.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
)
}

export default ForumPosts;
