import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import {checkAuth} from '../redux/reducers/auth';
import Logo from '../../public/img/Danamon.png';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username : ''};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.props.checkAuth(formData);
  }

  render() {
    return (
      <Row className="valign-wrapper login-box">
        <Col m={4} s={12} offset="m4" className="valign z-depth-3"
             style={{padding: 20, border: '1px solid #e0e0e0', borderRadius: 2, background: '#e0e0e0'}}>
          <Row>
            <img ref="logo" src={Logo} alt="logo" className="center-align"/>
          </Row>
          <Col s={12} className="white card card-content" style={{padding: 10}}>
            <Col m={12} s={12} className="center-align">
              <span className="grey-text">Please Sign in </span>
            </Col>

            {/*<Col m={12} s={12} className="alert alert-danger alert-dismissible">*/}
              {/*<p className="grey-text">Invalid Username or Password!</p>*/}
            {/*</Col>*/}

            <form onSubmit={this.submitForm}>
              <Col m={12} s={12} l={12} className="input-field">
                <Icon className="prefix">account_circle</Icon>
                <input ref="username" type="text" className="validate"/>
                <label >Email</label>
              </Col>

              <Col m={12} s={12} l={12} className="input-field">
                <Icon className="prefix">lock</Icon>
                <input ref="password" type="password" className="validate"/>
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
export default withRouter(connect(null, mapDispatchToProps)(Login))

