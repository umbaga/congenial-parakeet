import {combineReducers} from 'redux';
import session from './sessionReducer';
import itemtypes from './itemtypeReducer';
import picklists from './picklistReducer';

const rootReducer = combineReducers({
    itemtypes,
    picklists,
    session
});

export default rootReducer;