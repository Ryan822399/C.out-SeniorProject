import React, {useState, useRef, setShow, Component}  from "react";
import NewPost from '../NewPost/NewPost';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal, Row, Col} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class NewPostCommentButton extends Component {
    state = {
      comment: "",
      profile: "",
      feedPost: ""
    }

    inputChanged = event => {
      let att = this.state.attributes;
      att[event.target.name] = event.target.value;
      this.setState({attributes: att});
    }



  handleFormSubmit = event => {
    //event.preventDefault()
    //console.log(this.state.attributes);
    let form_data = new FormData();
    form_data.append('title', this.state.attributes.title);
    let url = process.env.REACT_APP_API_URL + '/api/feedposts/';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render(){
    return (
      <div style={{background: "#999", padding: "5%"}}>
        <Form>
          <h1>Create a Comment</h1>
          <Form.Group controlId="formGroupTitle">
            <Form.Control as="input" size="sm" name="title" type="title" placeholder="Enter a comment" value={this.state.comment} onChange={this.inputChanged}/>
          </Form.Group>
          <Button onClick={this.handleFormSubmit} variant="secondary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default withCookies(NewPostCommentButton);
