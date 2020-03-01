import React, { useState} from 'react';
import { Form, Modal, Button, ButtonToolbar  } from 'react-bootstrap';



function NewPostButton(props) {
  // console.log("INSIDE NEW POST BUTTON BUTTON")
  // console.log(props);
  const postTitleSubmited = event => {
   console.log("IN THE postSubmitted")
   console.log(event.target.value)
  // console.log(props.post)
   //props.post.currTab.title =  event.target.title;
  }

  const postDescSubmited = event => {
   console.log("IN THE postSubmitted")
    console.log(event.target.value)

  // props.post.currTab.description = event.target.desc;
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
          <Button type="button"  variant="primary" >
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
