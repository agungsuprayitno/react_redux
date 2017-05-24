import axios from 'axios';
const urlDomain = 'http://127.0.0.1';
let instance = axios.create({baseURL: urlDomain});
instance.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

export function fetchUser(){
  return function(dispatch) {
    axios.get(`${urlDomain}/api/users`)
      .then((response) => {
        dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data});
        //console.log(response.data)
      })
      .catch((err) => {
        dispatch({type: "FETCH_USERS_REJECTED", payload: err});
      })
  }
}