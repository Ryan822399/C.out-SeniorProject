import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter} from 'react-router-dom';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Friends from './containers/Friends/Friends';
import { CookiesProvider } from 'react-cookie';
import Feed from './containers/Feed/Feed';
import Graphs from './containers/Graphs/Graphs';
import TimelineDetails from './containers/TimelineDetails/TimelineDetails';
import PublicForum from './containers/PublicForum/PublicForum';


//<Route exact path="/workouts" component={App}/>
import Footer from './components/Footer/Footer';

const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path="/" component={Login}/>
      <Route path="/homepage" component={App}/>
      <Route exact path="/homepage/feed" component={Feed}/>
      <Route exact path="/homepage/profile" component={Profile}/>
      <Route exact path="/homepage/graphs" component={Graphs}/>
      <Route exact path="/homepage/friends" component={Friends}/>
      <Route exact path="/homepage/timeline" component={TimelineDetails}/>
      <Route exact path="/homepage/forum" component={PublicForum}/>
    </CookiesProvider>
    <Footer />
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
