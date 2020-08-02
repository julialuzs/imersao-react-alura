import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, RegisterVideo, RegisterCategory } from './pages/index.js';

const PageNotFound = () => (<div> Error 404 - Page not found :(</div>);

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/register/video' component={RegisterVideo}/>
      <Route path='/register/category' component={RegisterCategory}/>
      <Route component={PageNotFound}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
