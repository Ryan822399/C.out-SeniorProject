import React, {Component}  from "react";
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar} from 'react-bootstrap';
import axios from 'axios';

class ShareButton extends Component {

  state = {
  }

  handleLike = event => {
    console.log(this.props.postInfo.title);
    let form_data = new FormData();
    form_data.append('title', this.props.postInfo.title);
    form_data.append('caption',this.props.postInfo.caption);
    form_data.append('post', this.props.postInfo.post);
    //form_data.append('picture', this.props.postInfo.picture);
    form_data.append('user', this.props.userID);

    let url = 'http://localhost:8000/api/feedposts/';

    console.log(form_data);
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
    const wor = this.props;
    return (
      <Button variant="outline-success" onClick={this.handleLike}> Repost</Button>
    )
  }
}


export default ShareButton;
