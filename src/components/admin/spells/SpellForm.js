import React from 'react';
import PropTypes from 'prop-types';
//import DndInput from '../../common/inputs/DndInput';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
//import util from '../../../util/util';

class SpellForm extends React.Component {
    constructor(props) {
        super(props);
        this.setFocus = this.setFocus.bind(this);
    }
    
    componentDidMount() {
        this.refs.name.setFocus();
    }
    
    setFocus() {
        this.refs.name.setFocus();
    }
    
    render() {
        const spell = this.props.spell;
        return (
            <div>
                <form>
                    <DndUniversalInput
                        ref="name"
                        referenceObject={spell}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        />
                </form>
            </div>
        );
    }
}

SpellForm.propTypes = {
    spell: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default SpellForm;