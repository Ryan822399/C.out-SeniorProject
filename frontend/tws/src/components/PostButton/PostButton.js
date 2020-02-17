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

  render(){
    return (
      <NewPost />
    );
  }
}

export default PostButton;
