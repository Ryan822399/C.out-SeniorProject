import React, {Component} from "react";
import NewPost from '../NewPost/NewPost';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';

class PostButton extends Component {
    state = {
      title: "",
      caption: "",
      post: "",
      picture: ""
    }

  handleFormSubmit() {
  // Form submission logic
  }

  handleClearForm() {
    // Logic for resetting the form
  }

  render(){
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <NewPost />
      </form>
    );
  }
}

export default PostButton;
