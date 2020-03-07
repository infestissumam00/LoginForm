import axiosInstance from 'core/Axios';
import { storeConstants, identifiers, URLS } from 'library/common/constants';
import { fetchFromStorage, removeFromStorage, saveToStorage } from 'library/utilities';

export const setAuthentication = token => dispatch => {
  saveToStorage(identifiers.token, token);
  dispatch({
    type: storeConstants.SET_AUTHENTICATION,
    payload: token,
  });
};

export const getAuth = () => dispatch => {
  const token = fetchFromStorage(identifiers.token);
  if (token) {
    dispatch(setAuthentication(token));
  }
};

export const logoutUser = () => dispatch => {
  axiosInstance.post(URLS.logout).then(({ status }) => {
    if (status === 200) {
      removeFromStorage(identifiers.token);
      dispatch({ type: storeConstants.LOGOUT });
    }
  });
};
