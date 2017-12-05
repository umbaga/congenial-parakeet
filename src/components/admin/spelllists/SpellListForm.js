import React from 'react';
import PropTypes from 'prop-types';
import DndButton from '../../common/buttons/DndButton';
import DndInput from '../../common/inputs/DndInput';
import DndInputWrapper from '../../common/inputs/DndInputWrapper';
import DndUniversalInput from '../../common/inputs/DndUniversalInput';
import DndPicklistAddSelect from '../../common/inputs/DndPicklistAddSelect';
import DndCheckboxList from '../../common/inputs/DndCheckboxList';
import DndCheckboxPicklist from '../../common/inputs/DndCheckboxPicklist';
import util from '../../../util/util';
import { Tabs, Tab } from 'react-bootstrap';
import DndManageMechanics from '../../common/objectManagement/DndManageMechanics';
import DndManageCharts from '../../common/objectManagement/DndManageCharts';
import DndManageSupplementalDescriptions from '../../common/objectManagement/DndManageSupplementalDescriptions';

class SpellListForm extends React.Component {
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
        const spelllist = this.props.spelllist;
        console.log(spelllist);
        console.log(this.props.picklists);
        return (
            <div>
                <form>
                    <DndUniversalInput
                        ref="name"
                        referenceObject={spelllist}
                        onChange={this.props.onChange}
                        picklists={this.props.picklists}
                        hideDescription
                        />
                </form>
            </div>
        );
    }
}

SpellListForm.propTypes = {
    spelllist: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isCreate: PropTypes.bool.isRequired,
    onEdit: PropTypes.func,
    onViewDetails: PropTypes.func,
    saving: PropTypes.bool,
    picklists: PropTypes.array
};

export default SpellListForm;