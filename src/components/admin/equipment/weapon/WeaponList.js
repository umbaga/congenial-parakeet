import React from 'react';
import PropTypes from 'prop-types';
import WeaponListItem from './WeaponListItem';
import {Link} from 'react-router';


const WeaponList = ({weapons, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="6">Simple Melee Weapons</th>
            </tr>
            <tr>
                <th colSpan="6">Simple Ranged Weapons</th>
            </tr>
            <tr>
                <th colSpan="6">Martial Melee Weapons</th>
            </tr>
            <tr>
                <th colSpan="6">Martial Ranged Weapons</th>
            </tr>
            {weapons.map(weapon => 
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