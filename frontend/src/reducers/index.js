import { combineReducers } from 'redux';

import workshop from './workshop';
import auth from './auth';
import post from './post';
import payment from './pay'

export default combineReducers({ workshop, auth, post, payment });
