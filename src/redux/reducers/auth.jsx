import axios from 'axios';
import qs from 'qs';

const urlDomain = 'http://127.0.0.1';
export const AUTH = 'AUTH';

export function checkAuth(object) {
  let params = qs.stringify({
    grant_type : 'password',
    client_id: 3,
    client_secret: '1kcDb28AhqCWdeV9k9abCCutTpYcnyDL5lzOYR1c',
    username: object.username,
    password: object.password,
    scope: ''
  });

  let request = axios.post(`${urlDomain}/oauth/token`, params).then(function (response) {
      //console.log(response);
      localStorage.setItem('token', response.data.access_token);
      window.location.href = "/home";
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    type : AUTH,
    payload: request
  }
}