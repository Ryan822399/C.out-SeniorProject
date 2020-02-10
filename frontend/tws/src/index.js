import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import { CookiesProvider } from 'react-cookie';
import HomePage from './components/HomePage/HomePage';
import Graphs from './components/Graphs/Graphs';

const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path="/" component={Login}/>
      <Route exact path="/HomePage" component={HomePage}/>
      <Route exact path="/workouts" component={App}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/graphs" component={Graphs}/>
      <Route exact path="/friends" component={Friends}/>
    </CookiesProvider>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
