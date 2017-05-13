import axios from 'axios';
import qs from 'qs';

const urlDomain = 'http://localhost';
export const AUTH = 'AUTH';

export function checkAuth() {

  //const url = `http://139.59.99.42/api/3.0/system/status`;

  let params = {
    grant_type : 'password',
    client_id: 3,
    client_secret: '1kcDb28AhqCWdeV9k9abCCutTpYcnyDL5lzOYR1c',
    username: 'lyla29@example.net',
    password: 'secret',
    scope: ''
  };

  //let conf = axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  // var param = new URLSearchParams();
  // param.append('grant_type', 'password');
  // param.append('client_id', '3');
  // param.append('client_secret', '1kcDb28AhqCWdeV9k9abCCutTpYcnyDL5lzOYR1c');
  // param.append('username', 'lyla29@example.net');
  // param.append('password', 'secret');
  // param.append('scope', '');



  let request = axios.post(`${urlDomain}/oauth/token`, qs.stringify(params), {
    headers: {'Accept' : 'application/json'}
  })
    .then(function (response) {
      console.log(response);
      //sessionStorage.setItem('token', response.access_token);

    })
    .catch(function (error) {
      console.log(error);
    });

  // let params = {
  //   'grant_type' : 'password',
  //   'client_id': 3,
  //   'client_secret': '1kcDb28AhqCWdeV9k9abCCutTpYcnyDL5lzOYR1c',
  //   'username': 'lyla29@example.net',
  //   'password': 'secret',
  //   'scope': ''
  // };

  // let request = axios.post(`${url}`)
  //     .then(function (response) {
  //       console.log(response);
  //     }).error(function (error) {
  //       console.log(error);
  //     })
  //   ;
  //

  return {
    type : AUTH,
    payload: request
  }
}