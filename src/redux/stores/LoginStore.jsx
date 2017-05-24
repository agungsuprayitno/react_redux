import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware } from 'react-router-redux';

const LoginState = (state = [], action) => {
  switch (action.type){
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true};

    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false};
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    }
    default: {
      return state
    }
  }
};

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...LoginState,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

const resp = {store: store, history: history};

export default resp;