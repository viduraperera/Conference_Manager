import { combineReducers } from 'redux';

import workshop from './workshop';
import auth from './auth';
import post from './post';

export default combineReducers({ workshop, auth, post });
