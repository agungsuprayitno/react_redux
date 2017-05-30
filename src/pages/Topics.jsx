import React from 'react'
import {Route, Link} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <Link to={`${match.url}/asd`}>
      Example topic
    </Link>
    <br />
    <Link to={`${match.url}/components`}>
      Components
    </Link>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
  </div>
)

export default Topics;