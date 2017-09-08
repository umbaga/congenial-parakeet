import React from 'react';
import PropTypes from 'prop-types';
import ArmorListItem from './ArmorListItem';
import {Link} from 'react-router';
import util from '../../../../util/util';


const ArmorList = ({armors, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="7">Light Armor</th>
            </tr>
            {armors.filter(
                function(armor) { 
                    return armor.proficiency.id == util.picklistInfo.LIGHT_ARMOR_PROFICIENCY;
                }).map(armor => 
                           <ArmorListItem 
                                key={armor.id} 
                                armor={armor}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="7">Medium Armor</th>
            </tr>
            {armors.filter(
                function(armor) { 
                    return armor.proficiency.id == util.picklistInfo.MEDIUM_ARMOR_PROFICIENCY;
                }).map(armor => 
                           <ArmorListItem 
                                key={armor.id} 
                                armor={armor}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="7">Heavy Armor</th>
            </tr>
            {armors.filter(
                function(armor) { 
                    return armor.proficiency.id == util.picklistInfo.HEAVY_ARMOR_PROFICIENCY;
                }).map(armor => 
                           <ArmorListItem 
                                key={armor.id} 
                                armor={armor}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
            <tr>
                <th colSpan="7">Shields</th>
            </tr>
            {armors.filter(
                function(armor) { 
                    return armor.proficiency.id == util.picklistInfo.SHIELD_ARMOR_PROFICIENCY;
                }).map(armor => 
                           <ArmorListItem 
                                key={armor.id} 
                                armor={armor}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
        </tbody>
    );
};

ArmorList.propTypes = {
    armors: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default ArmorList;