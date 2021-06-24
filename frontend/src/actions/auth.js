import { LOGIN } from '../constants/constants';
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

//create workshops
// export const createWorkshops = (workshop) => async (dispatch) => {
//   try {
//     await api.createWorkshop(workshop);
//   } catch (error) {
//     console.log('creating workshop' + error);
//   }
// };
