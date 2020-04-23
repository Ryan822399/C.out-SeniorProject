import React, {Component}  from "react";
import {Spinner, ListGroup,Container, Card, Button, Media, ButtonToolbar, DropdownButton, Dropdown} from 'react-bootstrap';
import axios from 'axios';

class CommentButton extends Component {

  state = {
  }

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
    const wor = this.props;
    return (
      <DropdownButton id="dropdown-basic-button" title="Comment" variant="outline-secondary">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </DropdownButton>
    )
  }
}


export default CommentButton;
