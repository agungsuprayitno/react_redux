import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkAuth} from '../reducers/auth';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {username : ''};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    this.props.checkAuth(this.state.username);
    this.setState({username : ''})
  }

  render() {
    return (
      <Row className="valign-wrapper login-box">

        <Col m={4} s={12} offset="m4" className="valign z-depth-3"
             style={{padding: 20, border: '1px solid #e0e0e0', borderRadius: 2, background: '#e0e0e0'}}>
          <Row>
            <img className="center-align" src="./src/img/Danamon.png" alt="logo"/>
          </Row>
          <Col s={12} className="white card card-content" style={{padding: 10}}>
            <Col m={12} s={12} className="center-align">
              <label className="grey-text">Please Sign in </label>
            </Col>

            <form onSubmit={this.submitForm}>
              <Col m={12} s={12} l={12} className="input-field">
                <Icon className="prefix">account_circle</Icon>
                <input type="text" className="validate"/>
                <label >Email</label>
              </Col>

              <Col m={12} s={12} l={12} className="input-field">
                <Icon className="prefix">lock</Icon>
                <input type="password" className="validate"/>
                <label >Password</label>
              </Col>
              <Col m={12} s={12} l={12} className="input-field">
                <Col m={8} s={12}>
                  <a href="#"> Forgot Password?</a>
                </Col>
                <Col m={4} s={12}>
                  <Button className="light-blue darken-1">Submit</Button>
                </Col>
              </Col>
            </form>

          </Col>

        </Col>
      </Row>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({checkAuth}, dispatch);
}

//let login = connect()(Login);
//let login = connect(null, mapDispatchToProps)(Login);


export default withRouter(connect(null, mapDispatchToProps)(Login))


//export default login;
