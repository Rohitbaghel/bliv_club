// apiWrapper.js

import { throttle } from "lodash";
import axios from "axios";

const API_ENDPOINT = "https://api.coingecko.com/api/v3/coins/markets";

// Throttle the API requests to 20 requests per minute
const THROTTLE_TIME = 3000;
export const throttledApiCall = throttle(
  (params) => axios.get(API_ENDPOINT, { params }),
  THROTTLE_TIME
);

