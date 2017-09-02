import React from 'react';
import PropTypes from 'prop-types';
import ItemtypeListItem from './ItemtypeListItem';
import {Link} from 'react-router';


const ItemtypeList = ({itemtypes, openModal, selectedId, changeSelectedId}) => {
    return (
        <tbody>
            {itemtypes.map(itemtype => 
                           <ItemtypeListItem 
                                key={itemtype.id} 
                                itemtype={itemtype}
                                openModal={openModal}
                                selectedId={selectedId} 
                                changeSelectedId={changeSelectedId}
                               />
                          )}
        </tbody>
    );
};

ItemtypeList.propTypes = {
    itemtypes: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired,
    changeSelectedId: PropTypes.func.isRequired,
    selectedId: PropTypes.number.isRequired
};

export default ItemtypeList;