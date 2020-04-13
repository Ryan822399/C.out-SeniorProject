import React, { useState} from 'react';
import { Form, Modal, Button, ButtonToolbar  } from 'react-bootstrap';



function NewPostButton(props) {

  const postTitleSubmited = event => {
  props.updateTitle(event.target.value)

  }

  const postDescSubmited = event => {
    props.updateDesc(event.target.value)
  }

  const postWeightSubmited = event => {
      props.updateWeight(event.target.value)
  }

  const postDateSubmited = event => {
      props.updateDate(event.target.value)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post a Workout!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Workout</Form.Label>
            <Form.Control
            placeholder="Enter a Workout"
            as="input"
            name="title"
            onChange={postTitleSubmited}
            />
          </Form.Group>

          <Form.Group controlId="graphBasicDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
            placeholder="Describe your Workout"
            as="input"
            name="desc"
            onChange={postDescSubmited}
            />
          </Form.Group>

          <Form.Group controlId="graphBasicWeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
            placeholder="Enter a Weight"
            as="input"
            name="weight"
            onChange={postWeightSubmited}
            />
          </Form.Group>

          <Form.Group controlId="graphBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
            placeholder="Enter a Date"
            as="input"
            name="date"
            onChange={postDateSubmited}
            />
          </Form.Group>
          <Button type="button" onClick={props.formSubmitted}  variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ForumButton(props) {
  // console.log("INSIDE FORUM BUTTON MAIN")
  // console.log(props);
const [modalShow, setModalShow] = React.useState(false);
  return(
    <div>
        <ButtonToolbar>
        <Button  style={styles.forbutton} variant="primary" onClick={() => setModalShow(true)}>
          Post a Workout
        </Button>
        <NewPostButton
          formSubmitted={props.formSubmitted}
          updateTitle={props.updateTitle}
          updateDesc={props.updateDesc}
          updateWeight={props.updateWeight}
          updateDate={props.updateDate}
          post={props.post}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </ButtonToolbar>
    </div>
  );
}



export default ForumButton;

const styles = {
    forbutton: {
      background: "#6c757d",
        width: '500px',
        marginBottom: '20px',
        marginTop: '25px',
    }
};
