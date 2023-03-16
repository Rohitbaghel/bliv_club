// reducer.js

const initialState = {
  coinData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COIN_DATA_SUCCESS":
      return {
        ...state,
        coinData: action.payload,
        error: null,
      };
    case "FETCH_COIN_DATA_FAILURE":
      return {
        ...state,
        coinData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
