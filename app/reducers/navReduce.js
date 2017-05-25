/**
 * Created by HULL on 2017/5/24.
 */
'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
    navTab:1
};
export default function navReduce(state = initialState, action) {
    state = Object.assign({}, state, {

    });

    switch (action.type) {
        case types.NAV_TAB:
            return Object.assign({}, state, {
                navTab: action.navTab
            });
        default:
            return state;
    }
}