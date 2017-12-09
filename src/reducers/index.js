import {combineReducers} from 'redux';
import session from './sessionReducer';
import armors from './armorReducer';
import backgrounds from './backgroundReducer';
import dierolls from './dierollReducer';
import equipments from './equipmentReducer';
import itemtypes from './itemtypeReducer';
import packs from './packReducer';
import picklists from './picklistReducer';
import proficiencies from './proficiencyReducer';
import races from './raceReducer';
import spells from './spellReducer';
import spelllists from './spellListReducer';
import weapons from './weaponReducer';

const rootReducer = combineReducers({
    armors,
    backgrounds,
    dierolls,
    equipments,
    itemtypes,
    packs,
    picklists,
    proficiencies,
    races,
    spells,
    spelllists,
    weapons,
    session
});

export default rootReducer;