import axios from 'axios';
import qs from 'qs';

const urlDomain = 'http://127.0.0.1';
let instance = axios.create({baseURL: urlDomain});
instance.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

export function fetchAuth(object){
  let params = qs.stringify({
    grant_type : 'password',
    client_id: 1,
    client_secret: '1gntPT5zCsLvWUnr3VHACr2AHHKGBnWsJn6SRW5D',
    username: object.username,
    password: object.password,
    scope: ''
  });
  return function(dispatch) {
    dispatch({type: "FETCH_AUTH_PENDING"});
    axios.post(`${urlDomain}/oauth/token`, params).then((response) => {
      dispatch({type: "FETCH_AUTH_FULFILLED", payload: response.data});
    })
      .catch((err) => {
        dispatch({type: "FETCH_AUTH_REJECTED", payload: err.response.status});
      });
  }
}