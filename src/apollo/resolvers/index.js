import merge from 'lodash/merge';
import auth from './auth';
import globalData from './globalData';

export default merge(auth, globalData);
