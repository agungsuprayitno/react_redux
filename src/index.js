import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route} from 'react-router';
import { ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import store from './redux/stores';

import css from '../public/css/style.css';
// import MainLayout from './components/layout/MainLayout';
/// Load Al Pages for Mapping Route
import {Home} from './pages/Home';
import Login from './pages/Login';
import Topics from './pages/Topics';

import User from './pages/users/User';
import CreateUser from './pages/users/CreateUser';

const history = createHistory();

const loginCheck = () => {
  if (localStorage.getItem('token') === null) {
    history.replace('/');
    return;
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
        <Route path="/topics" component={Topics}/>
          <Route path="/home" component={Home} onEnter={requireLogin}/>
          <Route path="/users" component={User} onEnter={requireLogin} />
          <Route path="/users/create" component={CreateUser} onEnter={requireLogin}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

//
// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
//
//
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )
//
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )
//
//
// const BasicExample = () => (
//   <Router history={Browse}>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )
//
// export default BasicExample