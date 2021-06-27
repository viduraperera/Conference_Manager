import { GET_USER, LOGIN, REGISTER } from '../constants/constants';
import * as api from '../api/index.js';

//getting workshops
export const login = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.login(credentials);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log('login error' + error);
  }
};

export const getUser = () => (dispatch) => {
  try {
    dispatch({ type: GET_USER });
  } catch (error) {
    console.error(error);
  }
};

export const register = (user) => async (dispatch) => {
  try {
    const data = await api.register(user);
    console.log(data);
    // dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    console.error(error);
  }
};
