import {combineReducers} from 'redux';
import session from './sessionReducer';
import itemtypes from './itemtypeReducer';
import picklists from './picklistReducer';
import dierolls from './dierollReducer';

const rootReducer = combineReducers({
    itemtypes,
    picklists,
    dierolls, 
    session
});

export default rootReducer;