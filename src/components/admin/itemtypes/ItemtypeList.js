import React from 'react';
import PropTypes from 'prop-types';
import ItemtypeListItem from './ItemtypeListItem';
import {Link} from 'react-router';


const ItemtypeList = ({itemtypes}) => {
    return (
        <tbody>
            {itemtypes.map(itemtype => 
                           <ItemtypeListItem key={itemtype.id} itemtype={itemtype}/>
                          )}
        </tbody>
    );
};

ItemtypeList.propTypes = {
    itemtypes: PropTypes.array.isRequired
};

export default ItemtypeList;