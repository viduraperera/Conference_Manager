import { combineReducers } from 'redux';

import workshop from './workshop';
import auth from './auth';
import post from './post';
import payment from './pay'
import research from './research'

export default combineReducers({ workshop, auth, post, payment, research });
