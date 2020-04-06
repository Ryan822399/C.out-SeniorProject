import React, {Component}  from "react";
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar} from 'react-bootstrap';

class LikeButton extends Component {

  state = {
    isClicked: true,
  }

  handleLike = event => {
    let form_data = new FormData();

    var postId = this.props.postId.id;
    if(this.state.isClicked == true){
      this.setState({isClicked: false});
      var newLikes = this.props.postId.likes+1;
      form_data.append('likes', newLikes);

      fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/${postId}/`, {
        method: 'PUT',
        headers: {

        },
        body: form_data
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch(error => console.log(error))
      console.log(newLikes);
    }
    else {
      this.setState({isClicked: true});
      var newLikes = this.props.postId.likes-1;
      form_data.append('likes', newLikes);

      fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/${postId}/`, {
        method: 'PUT',
        headers: {

        },
        body: form_data
      }).then( resp => resp.json())
      .then( res => console.log(res))
      .catch(error => console.log(error))
      console.log(newLikes);
    }
  }


  render(){
    const wor = this.props;
    return (

      <Button variant="outline-primary" onClick={this.handleLike}> {this.state.isClicked ? `Like (${this.props.postId.likes})` : `Unlike (${this.props.postId.likes})`} </Button>
    )
  }
}


export default LikeButton;
