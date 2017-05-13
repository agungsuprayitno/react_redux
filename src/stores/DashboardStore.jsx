import React from 'react';
import redux from 'redux';

export default class DashboardStore extends React.Component{

  testredux(){
    let reducer = () => {

      console.log(action.type);
    };

    let store = redux.createStore(reducer);

    let action = {
      type: 'CHANGE_NAME',
      name: 'Agung'
    };

    return store.dispatch(action);
  }

}





