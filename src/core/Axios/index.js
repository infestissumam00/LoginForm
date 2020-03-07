import Axios from 'axios/index';

import { errorHandler, fetchFromStorage } from 'library/utilities';
import { identifiers } from 'library/common/constants/IdentifierConstants';

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(config => {
  const token = fetchFromStorage(identifiers.token);
  const clonedConfig = config;

  if (token) {
    clonedConfig.headers.common = {
      Authorization: `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
    };
  }

  return clonedConfig;
});

axiosInstance.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    errorHandler(error);
    return Promise.reject(error);
  },
);

export default axiosInstance;
