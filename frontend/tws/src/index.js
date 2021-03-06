import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter} from 'react-router-dom';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import SearchFriends from './components/SearchFriends/SearchFriends';
import { CookiesProvider } from 'react-cookie';
import Feed from './containers/Feed/Feed';
import Graphs from './containers/Graphs/Graphs';
import TimelineDetails from './components/TimelineDetails/TimelineDetails';
import PublicForum from './containers/PublicForum/PublicForum';
import Friend from './containers/Friend/Friend';
import Survey from './containers/Survey/Survey';


const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path="/" component={Login}/>
      <Route path="/homepage" component={App}/>
      <Route path="/survey" component={Survey}/>
      <Route exact path="/homepage/feed" component={Feed}/>
      <Route exact path="/homepage/profile" component={Profile}/>
      <Route exact path="/homepage/graphs" component={Graphs}/>
      <Route exact path="/homepage/friends" component={SearchFriends}/>
      <Route exact path="/homepage/timeline" component={TimelineDetails}/>
      <Route exact path="/homepage/forum" component={PublicForum}/>
      <Route exact path="/homepage/friend" component={Friend}/>
    </CookiesProvider>



  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
