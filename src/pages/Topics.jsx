import React from 'react'
import {Route, Link} from 'react-router-dom'
import App from '../modules/App'



const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const Topics = ({ match }) => (
  <App>

    <h2>Topics</h2>
    <Link to={`${match.url}/asd`}>
      Example topic
    </Link>
    <br />
    <Link to={`${match.url}/components`}>
      Components
    </Link>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
    {/*<Route exact path={match.url} render={() => (*/}
      {/*<h3>Please select a topic.</h3>*/}
    {/*)}/>*/}
    <Route component={NoMatch}/>
  </App>
)

export default Topics;