import { PAY } from '../constants/constants';

const PaymentReducer = (state = { payment: null }, action) => {
  switch (action.type) {
    case PAY:
        return { ...state, payment: action?.payload };
    default:
      return state;
  }
};

export default PaymentReducer;
