import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
//import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {

  console.log(action.type);
  switch(action.type){
    case 'FETCH_USER_PENDING':
      return {...state, fetching: true};
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    case 'FETCH_USERS_ERROR':
      return {...state, fetching: false, error: action.payload};
    default:
      return state
  }
};

const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer, middleware);
const urlDomain = 'http://127.0.0.1';

let instance = axios.create({baseURL: urlDomain});
instance.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

export function fetchUser() {
  store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get(`${urlDomain}/api/users`)
  });
}