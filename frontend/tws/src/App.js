import React, {Component} from 'react';
import { withCookies } from 'react-cookie';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

var FontAwesome = require('react-fontawesome');

class App extends Component{

  state = {
    token: this.props.cookies.get('tws-token')
  }

  componentDidMount() {
    if(this.state.token) {
    console.log("checking if user is logged in ")
    } else {
      window.location.href = '/';
    }
  }

  render() {
    return (
      <div >
        <NavBar />
        
      </div>

    );
  }
}

export default withCookies(App);
