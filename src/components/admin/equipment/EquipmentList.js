import React from 'react';
import PropTypes from 'prop-types';
import EquipmentListItem from './EquipmentListItem';

const EquipmentList = ({equipments, equipmentCategory, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="7">{equipmentCategory.name}</th>
            </tr>
            {equipments.filter(
                function(equipment) {
                    return equipment.category.id == equipmentCategory.id;
                }).map(equipment =>
                           <EquipmentListItem
                                key={equipment.id}
                                equipment={equipment}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                               />
                          )}
        </tbody>
    );
};

EquipmentList.propTypes = {
    equipmentCategory: PropTypes.object.isRequired,
    equipments: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default EquipmentList;