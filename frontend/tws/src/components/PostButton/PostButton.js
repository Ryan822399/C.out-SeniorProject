import React, {Component} from "react";
import NewPost from '../NewPost/NewPost';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal} from 'react-bootstrap';

class PostButton extends Component {
    state = {
      title: "",
      caption: "",
      post: ""
      //picture: ""
    }

  handleFormSubmit = event => {
    console.log('submitting new post');
    fetch(`http://localhost:8000/admin/api/feedpost/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.title, this.state.caption, this.state.post)
    }).then( resp => resp.json())
    .catch( error => console.log(error))
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
