import React from 'react';
import PropTypes from 'prop-types';
import ArmorListItem from './ArmorListItem';
import util from '../../../../util/util';


const ArmorList = ({armors, openModal, selectedId, changeSelectedId, onEdit}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="7">Light Armor</th>
            </tr>
            {armors.filter(
                function(armor) {
                    return armor.proficiency.id == util.picklistInfo.ARMOR_PROFICIENCY_LIGHT;
                }).map(armor =>
                       <ArmorListItem
                           key={armor.id}
                           armor={armor}
                           openModal={openModal}
                           selectedId={selectedId}
                           changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                           />
                          )}
            <tr>
                <th colSpan="7">Medium Armor</th>
            </tr>
            {armors.filter(
                function(armor) {
                    return armor.proficiency.id == util.picklistInfo.ARMOR_PROFICIENCY_MEDIUM;
                }).map(armor =>
                       <ArmorListItem
                           key={armor.id}
                           armor={armor}
                           openModal={openModal}
                           selectedId={selectedId}
                           changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                           />
                          )}
            <tr>
                <th colSpan="7">Heavy Armor</th>
            </tr>
            {armors.filter(
                function(armor) {
                    return armor.proficiency.id == util.picklistInfo.ARMOR_PROFICIENCY_HEAVY;
                }).map(armor =>
                       <ArmorListItem
                           key={armor.id}
                           armor={armor}
                           openModal={openModal}
                           selectedId={selectedId}
                           changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                           />
                          )}
            <tr>
                <th colSpan="7">Shields</th>
            </tr>
            {armors.filter(
                function(armor) {
                    return armor.proficiency.id == util.picklistInfo.ARMOR_PROFICIENCY_SHIELD;
                }).map(armor =>
                       <ArmorListItem
                           key={armor.id}
                           armor={armor}
                           openModal={openModal}
                           selectedId={selectedId}
                           changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                           />
                          )}
        </tbody>
    );
};

ArmorList.propTypes = {
    armors: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default ArmorList;