import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from '../reducers';

// const middleware = applyMiddleware(promise(), thunk);
const middleware = applyMiddleware(promise(), thunk, createLogger());
export default createStore(reducer, middleware);

//
// import { applyMiddleware, createStore , combineReducers} from 'redux';
// import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
// import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
//
//
// import reducer from '../reducers';
//
// // const middleware = applyMiddleware(promise(), thunk);
// const middleware = applyMiddleware(promise(), thunk, createLogger());
// const store = createStore(
//   combineReducers({
//     ...reducer,
//     routing: routerReducer
//   }), middleware)
// export default store;
