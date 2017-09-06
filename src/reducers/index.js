import {combineReducers} from 'redux';
import session from './sessionReducer';
import dierolls from './dierollReducer';
import itemtypes from './itemtypeReducer';
import picklists from './picklistReducer';
import weapons from './weaponReducer';

const rootReducer = combineReducers({
    dierolls, 
    itemtypes,
    picklists,
    weapons,
    session
});

export default rootReducer;