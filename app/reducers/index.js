/**
 * Created by HULL on 2017/5/24.
 */
'use strict';

import {combineReducers} from 'redux';
import navReduce from './navReduce';

const rootReducer = combineReducers({
    navReduce
});

export default rootReducer;