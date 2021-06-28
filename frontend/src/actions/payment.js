import { PAY } from '../constants/constants';
import * as api from '../api/index.js';

//getting workshops
export const makePayment = (pay) => async (dispatch) => {
  try {
    const { data } = await api.payment(pay);
    dispatch({ type: PAY, payload: data });
  } catch (error) {
    console.log(error);
  }
};