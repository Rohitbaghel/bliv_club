import { throttledApiCall } from "../components/APIwrapper";

export const fetchCoinData = (params) => {
  return (dispatch) => {
    throttledApiCall(params)
      .then((response) => {
        dispatch(fetchCoinDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCoinDataFailure(error.message));
      });
  };
};

const fetchCoinDataSuccess = (coinData) => {
  return {
    type: "FETCH_COIN_DATA_SUCCESS",
    payload: coinData,
  };
};

const fetchCoinDataFailure = (error) => {
  return {
    type: "FETCH_COIN_DATA_FAILURE",
    payload: error,
  };
};

export default {
  fetchCoinData,
};
