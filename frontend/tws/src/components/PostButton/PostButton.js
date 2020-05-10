import React, {useState, useRef, setShow, Component}  from "react";
import NewPost from '../NewPost/NewPost';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Overlay, Tooltip, Modal, Row, Col} from 'react-bootstrap';
import { withCookies } from 'react-cookie';
import axios from 'axios';

class PostButton extends Component {
    state = {
      attributes: {
        title: "",
        caption: "",
        post: "",
        picture: null,
        user: this.props.cookies.get('tws-id'),
        likes: 0,
        profile: this.props.cookies.get('tws-id')
      },
      token: this.props.cookies.get('tws-token'),
      username: ""
    }

    inputChanged = event => {
      let att = this.state.attributes;
      att[event.target.name] = event.target.value;
      this.setState({attributes: att});
      console.log(this.state);
    }



  handleFormSubmit = event => {
    //event.preventDefault()
    //console.log(this.state.attributes);
    let form_data =  {
      title: this.state.attributes.title,
      caption: this.state.attributes.caption,
      post: this.state.attributes.post,
      picture: this.state.attributes.picture,
      likes: this.state.attributes.likes,
      user: parseInt(this.state.attributes.user),
      profile: parseInt(this.state.attributes.profile)
    }
    new FormData();
    form_data.append('title', this.state.attributes.title);
    form_data.append('caption', this.state.attributes.caption);
    form_data.append('post', this.state.attributes.post);
    form_data.append('picture', this.state.attributes.picture);
    form_data.append('user', parseInt(this.state.attributes.user));
    form_data.append('likes', this.state.attributes.likes);
    form_data.append('profile', parseInt(this.state.attributes.profile));
    let url = process.env.REACT_APP_API_URL + '/api/feedposts/';
    console.log(form_data)
    axios.post(url, form_data, {
      headers: {
         'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))


        // fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/`, {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json'
        //   },
        //   body: form_data
        // }).then( resp => resp.json())
        // .then( res => console.log(res))
        // .catch( error => console.log(error))

  };

  render(){

    return (
      <div style={{background: "#999", padding: "5%"}}>
        <Form>
          <h1>Create a Post</h1>
          <Form.Group controlId="formGroupTitle">
            <Form.Control as="input" size="sm" name="title" type="title" placeholder="Enter title" value={this.state.title} onChange={this.inputChanged}/>
          </Form.Group>
          <Form.Group controlId="formGroupCaption">
            <Form.Control size="sm" name="caption" type="caption" placeholder="Enter caption" value={this.state.caption} onChange={this.inputChanged}/>
          </Form.Group>
          <Form.Group controlId="formGroupPost">
            <Form.Control size="sm" name="post" type="post" placeholder="Enter post" value={this.state.post} onChange={this.inputChanged}/>
          </Form.Group>
          <input type="file"
                   id="picture"
                   name="picture"
                   accept="image/png, image/jpeg, image/JPG"  onChange={this.handleImageChange} required/>
          <Button onClick={this.handleFormSubmit} variant="secondary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default withCookies(PostButton);
