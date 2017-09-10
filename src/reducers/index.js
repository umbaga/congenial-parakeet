import {combineReducers} from 'redux';
import session from './sessionReducer';
import armors from './armorReducer';
import dierolls from './dierollReducer';
import equipments from './equipmentReducer';
import itemtypes from './itemtypeReducer';
import picklists from './picklistReducer';
import weapons from './weaponReducer';

const rootReducer = combineReducers({
    armors,
    dierolls, 
    equipments,
    itemtypes,
    picklists,
    weapons,
    session
});

export default rootReducer;