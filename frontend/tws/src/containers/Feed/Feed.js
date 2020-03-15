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
    token: this.props.cookies.get('tws-token')
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

  }

  render() {
    console.log("posts", this.state.posts)
    console.log("info", this.state.info)
      return (
        <div>
          <br/>
          <NewPost /> <br/><hr></hr>
          <div className='rowC'>
            <Container>
                  { this.state.posts[0]
                    && this.state.info[0] ? <Posts posts={this.state.posts} profile={this.state.info}/>
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
