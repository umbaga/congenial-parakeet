import React from 'react';
import PropTypes from 'prop-types';
import ItemtypeListItem from './ItemtypeListItem';


const ItemtypeList = ({itemtypes, openModal, selectedId, changeSelectedId, onEdit}) => {
    return (
        <tbody>
            {itemtypes.map(itemtype =>
                           <ItemtypeListItem
                                key={itemtype.id}
                                itemtype={itemtype}
                                openModal={openModal}
                                selectedId={selectedId}
                                changeSelectedId={changeSelectedId}
                            onEdit={onEdit}
                               />
                          )}
        </tbody>
    );
};

ItemtypeList.propTypes = {
    itemtypes: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired,
    onEdit: PropTypes.func
};

export default ItemtypeList;