import { URLS } from 'library/common/constants/UrlConstants';

export const errorHandler = error => {
  if (error.response) {
    const loginURL = process.env.REACT_APP_API_URL + URLS.login;
    if (error.response.status === 401) {
      if (error.response.config.url !== loginURL) {
        sessionStorage.clear();
        window.location.reload();
      }
    }
  }
};
