import React from 'react';
import PropTypes from 'prop-types';
import WeaponListItem from './WeaponListItem';
import {Link} from 'react-router';
import util from '../../../../util/util';


const WeaponList = ({weapons, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="6">Simple Melee Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) { 
                    return weapon.weaponProficiency.id == util.picklistInfo.SIMPLE_WEAPON_PROFICIENCY && weapon.weaponCategory.id == util.picklistInfo.MELEE_WEAPON_CATEGORY; 
                }).map(weapon => 
                           <WeaponListItem 
                                key={weapon.id} 
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="6">Simple Ranged Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) { 
                    return weapon.weaponProficiency.id == util.picklistInfo.SIMPLE_WEAPON_PROFICIENCY && weapon.weaponCategory.id == util.picklistInfo.RANGED_WEAPON_CATEGORY; 
                }).map(weapon => 
                           <WeaponListItem 
                                key={weapon.id} 
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="6">Martial Melee Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) { 
                    return weapon.weaponProficiency.id == util.picklistInfo.MARTIAL_WEAPON_PROFICIENCY && weapon.weaponCategory.id == util.picklistInfo.MELEE_WEAPON_CATEGORY; 
                }).map(weapon => 
                           <WeaponListItem 
                                key={weapon.id} 
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="6">Martial Ranged Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) { 
                    return weapon.weaponProficiency.id == util.picklistInfo.MARTIAL_WEAPON_PROFICIENCY && weapon.weaponCategory.id == util.picklistInfo.RANGED_WEAPON_CATEGORY; 
                }).map(weapon => 
                           <WeaponListItem 
                                key={weapon.id} 
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
        </tbody>
    );
};

WeaponList.propTypes = {
    weapons: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default WeaponList;