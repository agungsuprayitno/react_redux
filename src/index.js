import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import store from './redux/stores';

import css from '../public/css/style.css';

/// Load Al Pages for Mapping Route
import {Home} from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';

const history = createHistory();
 const loginCheck = () => {
   if (typeof(Storage) == "undefined") {
    history.replace('/')
  }
  return;
 };


 const requireLogin = loginCheck();

ReactDOM.render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <css />
        <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} onEnter={requireLogin}/>
          <Route path="/users" component={User} onEnter={requireLogin}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
