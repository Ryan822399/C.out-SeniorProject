import React, {Component} from 'react';
import Transformation from 'react';
import '../../css/HomePage.css';
import { withCookies } from 'react-cookie';
import {Spinner, NavDropdown, Container} from 'react-bootstrap';
import Posts from '../../components/Posts/Posts';

class Feed extends Component {

  state = {
    posts: [],
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
  }

  render() {
    console.log(this.state.posts)
      return (
        <div>
          <Container>
            { this.state.posts[0] ? <Posts posts={this.state.posts}/>
                  :  <Spinner animation="border" variant="success" />
            }
          </Container>
        </div>
      )
    }
  }
  
export default withCookies(Feed);
