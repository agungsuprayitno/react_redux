const initialState = {
  fetching: false,
  fetched: false,
  auth: [],
  error: null
};
export default function reducer(state = initialState, action) {

  switch (action.type){
    case "FETCH_AUTH_PENDING": {
      return {...state, fetching: true, fetched: false, error: null};

    }
    case "FETCH_AUTH_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_AUTH_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        auth: action.payload
      };
    }
    default: {
      return state
    }
  }
};