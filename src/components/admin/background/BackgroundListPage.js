import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BackgroundList from './BackgroundList';
import BackgroundEntry from './BackgroundEntry';
import * as actions from '../../../actions/admin/backgroundActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';

class BackgroundListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            canEdit: true,
            isCreate: false,
            selectedId: 0,
            showModal: false
        };
        this.changeSelectedId = this.changeSelectedId.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onViewDetails = this.onViewDetails.bind(this);
    }

    componentWillMount() {
        if (this.props.backgrounds[0].id == '') {
            this.props.actions.loadBackgrounds();
        }
    }

    backToAdminHome() {
        browserHistory.push('/Home');
    }

    changeSelectedId(newId) {
        this.setState({selectedId: parseInt(newId)});
    }
    
    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    onCreate() {
        this.changeSelectedId(0);
        this.open();
        this.setState({isCreate: true, selectedId: 0, canEdit: true});
    }

    onEdit() {
        this.setState({isCreate: false, canEdit: true});
    }
    
    onViewDetails() {
        this.setState({isCreate: false, canEdit: false});
    }

    render() {
        const backgrounds = this.props.backgrounds;
        return (
            <div className="col-md-12">
                <div>
                    <table className="table table-sm table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan="6">
                                    <h2><span><DndButton onClick={this.backToAdminHome} buttonType="back" /></span>Backgrounds</h2>
                                </th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <BackgroundList
                            backgrounds={backgrounds}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            onEdit={this.onEdit}
                            onViewDetails={this.onViewDetails}
                            />
                    </table>
                </div>
                <BackgroundEntry
                    closeModal={this.close}
                    openModal={this.open}
                    backgrounds={backgrounds}
                    isCreate={this.state.isCreate}
                    canEdit={this.state.canEdit}
                    selectedId={this.state.selectedId}
                    picklists={this.props.picklists}
                    showModal={this.state.showModal}
                    onEdit={this.onEdit}
                    onViewDetails={this.onViewDetails}
                    equipments={this.props.equipments}
                    proficiencies={this.props.proficiencies}
                    />
            </div>
        );
    }
}

BackgroundListPage.propTypes = {
    backgrounds: PropTypes.array.isRequired,
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    equipments: PropTypes.array.isRequired,
    proficiencies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    let equipments = Object.assign([{}], [util.objectModel.EQUIPMENT]);
    if (state.equipments.length > 0) {
        equipments = Object.assign([{}], state.equipments);
    }
    if (state.backgrounds.length > 0) {
        return {
            equipments: equipments,
            backgrounds: state.backgrounds,
            picklists: picklists,
            proficiencies: state.proficiencies
        };
    } else {
        return {
            equipments: equipments,
            backgrounds: [util.objectModel.EQUIPMENT_PACK],
            picklists: picklists,
            proficiencies: [util.objectModel.PROFICIENCY]
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundListPage);