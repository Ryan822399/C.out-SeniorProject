import React, {Component}  from "react";
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';
import Comment from '../../components/Comment/Comment';
import axios from 'axios';

class CommentButton extends Component {

  state = {
    comments: []
  }
  //         { this.state.comments[0] ? <Comment comments={this.state.comments} postInfo = {this.props.postInfo} userID = {this.props.userID}/>
  //              :  <div> <Spinner  animation="border" variant="success" /> </div>
  //        }
  handleLike = event => {
    console.log(this.props.postInfo.title);
    //let form_data = new FormData();
    //form_data.append('title', this.props.postInfo.title);
    //form_data.append('caption',this.props.postInfo.caption);
    //form_data.append('post', this.props.postInfo.post);
    //form_data.append('picture', this.props.postInfo.picture);
    //form_data.append('user', this.props.userID);

    //let url = 'http://localhost:8000/api/feedposts/';

    //console.log(form_data);
    //axios.post(url, form_data, {
    //  headers: {
    //    'content-type': 'multipart/form-data'
    //  }
    //})
    //    .then(res => {
    //      console.log(res.data);
    //    })
    //    .catch(err => console.log(err))
    //<Button variant="outline-secondary" onClick={this.handleLike}> Comment</Button>
   }



  render(){
    return (
      <DropdownButton id="dropdown-basic-button" title="Comment" variant="outline-secondary">
        <Comment comments={this.state.comments} postInfo = {this.props.postInfo} userID = {this.props.userID}/>
      </DropdownButton>
    )
  }
}


export default CommentButton;
