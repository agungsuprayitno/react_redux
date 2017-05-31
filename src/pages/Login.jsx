import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize';
import {connect} from 'react-redux';
import {fetchAuth} from '../redux/actions/authActions'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.isEmpty = this.isEmpty.bind(this)
  }

  isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

  submitForm(e) {
    e.preventDefault();
    const formData = {};

    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.props.dispatch(fetchAuth(formData))
  }


  render() {
    const { auth } = this.props;

    if(this.isEmpty(auth.auth.access_token) === false){
      localStorage.setItem('token', auth.auth.access_token);
      window.location.href = '/home';
       //console.log(auth.auth.access_token);
    }

    if(auth.error !== null){
      this.refs.notif_show.innerHTML = '<div class="col m12"><div class="alert alert-danger alert-dismissible"<span class="grey-text">Invalid Username or Password!</span></div></div>'
    }

    if(auth.fetching === true && auth.fetched === false){
      this.refs.notif_show.innerHTML = '<div class="col m12 s12"><div class="progress"><div class="indeterminate"></div></div></div>';
      //console.log(auth.error)
    }

    return (
      <Row className="valign-wrapper login-box">
        <Col m={4} s={12} offset="m4" className="valign z-depth-3"
             style={{padding: 20, border: '1px solid #e0e0e0', borderRadius: 2, background: '#e0e0e0'}}>
          <Row>
            <img ref="logo" src={'http://placehold.it/480x125'} alt="logo" className="center-align"/>
          </Row>
          <Col s={12} className="white card card-content" style={{padding: 10}}>
            <Row m={12} s={12} className="center-align">
              <span className="grey-text">Please Sign in </span>
            </Row>

            <div ref="notif_show"></div>

            <form onSubmit={this.submitForm.bind(this)}>
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

export default connect((store) => {
  return {
    auth: store.auth
  }
})(Login)

