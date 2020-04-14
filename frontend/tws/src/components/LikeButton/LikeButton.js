import React, {Component}  from "react";
import { withCookies } from 'react-cookie';
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar} from 'react-bootstrap';

class LikeButton extends Component {

  state = {
    isClicked: false,
    currentLikes: this.props.postId.likes,
    token: this.props.userId
  }

  handleLike = event => {
    let feedpost_form_data = new FormData();
    let likes_feedpost_form_data = new FormData();

    var postId = this.props.postId.id;
    var userId = this.state.token;
    var newLikes = 0;

    if(this.state.isClicked == false){
      newLikes = this.state.currentLikes+1;
      this.setState({isClicked: true});
      this.setState({currentLikes: newLikes});
      feedpost_form_data.append('likes', newLikes);

      likes_feedpost_form_data.append('user', userId);
      likes_feedpost_form_data.append('feedpost', postId);

      fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/${postId}/`, {
        method: 'PUT',
        headers: {

        },
        body: feedpost_form_data
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch(error => console.log(error))


      fetch(`${process.env.REACT_APP_API_URL}/api/likes/`, {
        method: 'POST',
        headers: {

        },
        body: likes_feedpost_form_data
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch(error => console.log(error))
      }

    else {
      newLikes = this.state.currentLikes-1;
      this.setState({isClicked: false});
      this.setState({currentLikes: newLikes});
      feedpost_form_data.append('likes', newLikes);
      fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/${postId}/`, {
        method: 'PUT',
        headers: {

        },
        body: feedpost_form_data
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch(error => console.log(error))

      }
    }





  render(){
    const wor = this.props;
    return (
      <Button variant="outline-primary" onClick={this.handleLike}> {this.state.isClicked ? `Unlike (${this.state.currentLikes})` : `Like (${this.state.currentLikes})`} </Button>
    )
  }
}


export default LikeButton;
