import React from 'react';
import PropTypes from 'prop-types';
import WeaponListItem from './WeaponListItem';
import util from '../../../../util/util';


const WeaponList = ({weapons, openModal, selectedId, changeSelectedId, onEdit}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="6">Simple Melee Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) {
                    return weapon.proficiency.id == util.picklistInfo.WEAPON_PROFICIENCY_SIMPLE && weapon.category.id == util.picklistInfo.WEAPON_CATEGORY_MELEE;
                }).map(weapon =>
                           <WeaponListItem
                                key={weapon.id}
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
                          )}
            <tr>
                <th colSpan="6">Simple Ranged Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) {
                    return weapon.proficiency.id == util.picklistInfo.WEAPON_PROFICIENCY_SIMPLE && weapon.category.id == util.picklistInfo.WEAPON_CATEGORY_RANGED;
                }).map(weapon =>
                           <WeaponListItem
                                key={weapon.id}
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
                          )}
            <tr>
                <th colSpan="6">Martial Melee Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) {
                    return weapon.proficiency.id == util.picklistInfo.WEAPON_PROFICIENCY_MARTIAL && weapon.category.id == util.picklistInfo.WEAPON_CATEGORY_MELEE;
                }).map(weapon =>
                           <WeaponListItem
                                key={weapon.id}
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
                          )}
            <tr>
                <th colSpan="6">Martial Ranged Weapons</th>
            </tr>
            {weapons.filter(
                function(weapon) {
                    return weapon.proficiency.id == util.picklistInfo.WEAPON_PROFICIENCY_MARTIAL && weapon.category.id == util.picklistInfo.WEAPON_CATEGORY_RANGED;
                }).map(weapon =>
                           <WeaponListItem
                                key={weapon.id}
                                weapon={weapon}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
                          )}
        </tbody>
    );
};

WeaponList.propTypes = {
    weapons: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default WeaponList;