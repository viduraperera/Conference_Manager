import { FETCH_PAY, PAY } from '../constants/constants';
import * as api from '../api/index.js';

//getting workshops
export const makePayment = (pay) => async (dispatch) => {
  try {
    const res = await api.payment(pay);
    dispatch({ type: PAY, payload: res.data });
    return {...res}
  } catch (error) {
    console.log(error);
    return {...error}
  }
};

export const fetchPayment = () => async (dispatch) => {
  try {
    const res = await api.getPayment();
    dispatch({type: FETCH_PAY, payload: res.data});
    return {...res}
  } catch (error) {
    return {...error}
  }
}