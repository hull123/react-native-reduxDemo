/**
 * Created by HULL on 2017/5/24.
 */
import * as types from '../constants/ActionTypes';

export function navReduce(navTab){
    return{
        type: types.NAV_TAB,
        navTab: navTab
    }
}