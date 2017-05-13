import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import todos from './reducers/todos';
//import axios from 'axios';

import Home from './pages/Home';
import Login from './pages/Login';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...todos,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

// axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
