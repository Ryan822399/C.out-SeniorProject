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

  componentDidMount(){
    console.log("DEBUG", this.props.postInfo.id);
    const postId = this.props.postInfo.id;

    fetch(`${process.env.REACT_APP_API_URL}/api/feedcomment/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then( resp => resp.json())
    .then( res => this.setState({comments: res}))
    .then(res => console.log("GET DEBUG", this.state.comments))
    .catch( error => console.log(error))

  }

  getData = event => {
    console.log("Current State", this.state.comments);
  }


  render(){
    return (
      <DropdownButton id="dropdown-basic-button" title="Comment" variant="outline-secondary" onClick={this.getData}>
        {this.state.comments ?
          <Comment postComments={this.state.comments} postInfo = {this.props.postInfo} userID = {this.props.userID}/>
          :  <div style={styles.spinners}> <Spinner  animation="border" variant="success" /> </div>
        }
      </DropdownButton>
    )
  }
}


export default CommentButton;

const styles = {
  spinners: {
    display: "flex",
    justifyContent: "center"
  }
}
