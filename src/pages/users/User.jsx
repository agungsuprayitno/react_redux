import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MainUser  from './MainUser'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


const User = ({ match }) => (

  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={MainUser}/>
      <Route path={`${match.url}/create`} component={CreateUser}/>
      <Route path={`${match.url}/update/`} component={UpdateUser}/>
      <Route component={NoMatch}/>
    </Switch>
  </div>
)

 export default User;






