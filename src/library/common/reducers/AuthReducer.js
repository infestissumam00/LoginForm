import { storeConstants } from '../constants/index';

const initialState = {
  isLoggedIn: false,
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeConstants.SET_AUTHENTICATION:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
    case storeConstants.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
