import { combineReducers } from 'redux';

import workshop from './workshop';
import auth from './auth';

export default combineReducers({ workshop, auth });
