import React from 'react'
import { Row, Col, Preloader, Button } from 'react-materialize'
import Header from '../components/navigation/Header'
import Logo from '../components/panel/Logo'
import ImageProfile from '../components/panel/ImageProfile'
import Side from '../components/navigation/Side'
import { connect } from 'react-redux'
import {fetchUser} from '../redux/actions/UserActions'

class User extends React.Component {

  constructor(props){
    super(props)
    this.testData = this.testData.bind(this)
  }

  componentWillMount(){
    this.props.dispatch(fetchUser())
  }

  testData (){
    this.props.dispatch(fetchUser())
  }

  render() {
    //console.log(this.props);

    const { users } = this.props;
    const mappedUser = users.map((user, i) => <li key={i}>{user.email}</li>);
    if(!mappedUser.length){
      return <Preloader size='big'/>
    }
     //console.log(mappedUser);
    return (
      <Row>
        <Header />
        <Col m={3} l={3} s={12}>
          <ul className="side-nav fixed">
            <Logo/>
            <ImageProfile/>
            <Side/>
          </ul>
        </Col>
        <Col m={9} l={9} s={12}>
          <Button onClick={this.testData}>test load data</Button>
          <ul>{mappedUser}</ul>
        </Col>
      </Row>

    );
  }
}

export default connect((store) => {
  return {
    users: store.users
  }
})(User)





