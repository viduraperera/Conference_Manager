import { PAY, FETCH_PAY } from '../constants/constants';

const PaymentReducer = (state = { payment: null, payments: null }, action) => {
  switch (action.type) {
    case PAY:
        return { ...state, payment: action?.payload };
    case FETCH_PAY:
        return { ...state, payments: action?.payload };
    default:
      return state;
  }
};

export default PaymentReducer;
