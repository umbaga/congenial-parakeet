import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class ContainerClass extends React.Component {
    render() {
        return (
            <div>
                <div>Container Header</div>
                {this.props.children}
                <div>Container Footer</div>
            </div>
        );
    }
}

ContainerClass.propTypes = {
    children: PropTypes.object
};

export default ContainerClass;