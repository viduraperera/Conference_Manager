import { GET_USER, LOGIN, LOGOUT } from '../constants/constants';

const AuthReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return state;
    case LOGOUT:
      localStorage.clear();
      return { ...state, user: null };
    case GET_USER:
      return { ...state, user: JSON.parse(localStorage.getItem('profile'))?.payload.user };
    default:
      return state;
  }
};

export default AuthReducer;
