import React, { useState} from 'react';
import { Form, Modal, Button, ButtonToolbar, ListGroup, Tab  } from 'react-bootstrap';



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
        <Modal.Title  id="contained-modal-title-vcenter">
          Ask a Question!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
          <Form.Group controlId="formBasicEmail">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#flex">
              <ListGroup horizontal>
                <ListGroup.Item onClick={props.updateCat}
                style={styles.modelcat} action
                href="#flex"
                name="flex">
                   Flexibility
                </ListGroup.Item>
                <ListGroup.Item name="diet"
                onClick={props.updateCat} style={styles.modelcat} action href="#Diet">
                  Diet
                </ListGroup.Item>
                <ListGroup.Item name="cardio"
                  style={styles.modelcat} onClick={props.updateCat} action href="#Cardio">
                  Cardio
                </ListGroup.Item>
                <ListGroup.Item name="weight"
                style={styles.modelcat} onClick={props.updateCat} action href="#Weight">
                  Weights
                </ListGroup.Item>
              </ListGroup>
            </Tab.Container>
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
          <Button type="button" onClick={props.formSubmitted} style={{background: "#6c757d"}} variant="primary" type="submit">
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
          updateCat={props.updateCat}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </ButtonToolbar>
    </div>
  );
}



export default ForumButton;

const styles = {
    text: {
      alignText: "center"
    },
    modelcat: {
      display: "flex",
      justifyContent: 'center',
      position: 'center',
      alignItems: "center",
      height: '40px',
      width: '100px'
    },
    forbutton: {
        background: "#6c757d",
        width: '500px',
        marginBottom: '20px',
        marginTop: '25px',
    }
};
