import React from 'react';
import PropTypes from 'prop-types';
import EquipmentListItem from './EquipmentListItem';
import {Link} from 'react-router';
import util from '../../../util/util';


const EquipmentList = ({equipments, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            <tr>
                <th colSpan="7">General Equipment</th>
            </tr>
            {equipments.filter(
                function(equipment) { 
                    return equipment.category.id == util.picklistInfo.GENERAL_EQUIPMENT_CATEGORY;
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
    equipments: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default EquipmentList;