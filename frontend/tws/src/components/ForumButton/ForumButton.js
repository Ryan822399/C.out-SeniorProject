import React, { useState} from 'react';
import { Form, Modal, Button, ButtonToolbar  } from 'react-bootstrap';



function NewPostButton(props) {

  const postTitleSubmited = event => {
  props.updateTitle(event.target.value)

  }

  const postDescSubmited = event => {
    props.updateDesc(event.target.value)
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
          Ask a Question!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
            placeholder="Enter a Title"
            as="input"
            name="title"
            onChange={postTitleSubmited}
            />
            <Form.Text className="text-muted">
              Please no profanities
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Question</Form.Label>
            <Form.Control
             as="input"
             type="username"
             onChange={postDescSubmited}
             placeholder="Enter a Description"
             name="desc"/>
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
          Ask a Question
        </Button>
        <NewPostButton
          formSubmitted={props.formSubmitted}
          updateTitle={props.updateTitle}
          updateDesc={props.updateDesc}
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
        width: '500px',
        marginBottom: '20px',
        marginTop: '25px',
    }
};
