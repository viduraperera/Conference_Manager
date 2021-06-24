import { LOGIN, LOGOUT } from '../constants/constants';

const AuthReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, user: action?.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
