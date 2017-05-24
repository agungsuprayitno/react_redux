const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

export default function reducer(state = initialState, action) {

  switch (action.type){
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true};

    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false};
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
    }
    default: {
      return state
    }
  }
};