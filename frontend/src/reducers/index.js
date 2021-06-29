import { combineReducers } from 'redux';

import workshop from './workshop';
import research from "./research";
import auth from './auth';
import post from './post';
import payment from './pay';

export default combineReducers({ workshop, auth, post, payment, research });
