import {combineReducers} from 'redux';
import session from './sessionReducer';
import armors from './armorReducer';
import dierolls from './dierollReducer';
import equipments from './equipmentReducer';
import itemtypes from './itemtypeReducer';
import packs from './packReducer';
import picklists from './picklistReducer';
import proficiencies from './proficiencyReducer';
import weapons from './weaponReducer';

const rootReducer = combineReducers({
    armors,
    dierolls,
    equipments,
    itemtypes,
    packs,
    picklists,
    proficiencies,
    weapons,
    session
});

export default rootReducer;