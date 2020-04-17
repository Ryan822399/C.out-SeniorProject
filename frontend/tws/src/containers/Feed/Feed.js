import React, {Component} from 'react';
import Transformation from 'react';
import { withCookies } from 'react-cookie';
import {Spinner, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import FeedCss from '../../css/Feed.css'

class Feed extends Component {

  state = {
    posts: [],
    info: [],
    userData: [],
    token: this.props.cookies.get('tws-token'),
    user: this.props.cookies.get('tws-id')
  }

  componentDidMount() {
      fetch(`${process.env.REACT_APP_API_URL}/api/feedposts/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.state.token}`
        }
      }).then( resp => resp.json())
      .then( res => this.setState({posts: res}))
      .catch( error => console.log(error))

      fetch(`${process.env.REACT_APP_API_URL}/api/profile/`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }).then( resp => resp.json())
      .then( res => this.setState({info: res}))
      .catch(error => console.log(error))

      let flag = false;
      fetch(`${process.env.REACT_APP_API_URL}/api/profile/${this.props.cookies.get('tws-id')}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then( resp => resp.json())
      .then( res => this.setState({userData: res}))
      .catch( error => console.log(error))


  }

  render() {
    console.log("USER DATA", this.state.userData)
    console.log(this.state.userData)
    if((this.state.userData.firstName === "temp")) {
      console.log("in CONDITION", this.state.userData)
      window.location.href = "/survey";
    }
      return (
        <div>
          <br/>
          <div>
            <Container>
              <NewPost /> <br/>
                  { this.state.posts[0]
                    && this.state.info[0] ? <Posts posts={this.state.posts} profile={this.state.info} userId = {this.state.user}/>
                        :  <div style={styles.spinners}> <Spinner  animation="border" variant="success" /> </div>
                  }
            </Container>
          </div>
        </div>
      )
    }
  }

export default withCookies(Feed);

const styles = {
  spinners: {
    display: "flex",
    justifyContent: "center"
  }
}
