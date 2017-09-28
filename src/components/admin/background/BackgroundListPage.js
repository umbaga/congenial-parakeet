import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import BackgroundList from './BackgroundList';
//import BackgroundEntry from './BackgroundEntry';
import * as actions from '../../../actions/admin/backgroundActions';
import util from '../../../util/util';
import DndButton from '../../common/DndButton';
import DndModal from '../../common/DndModal';

class BackgroundListPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            isCreate: false,
            selectedId: 0
        };
        this.onCreate = this.onCreate.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.changeSelectedId = this.changeSelectedId.bind(this);
    }

    componentWillMount() {
        if (this.props.backgrounds[0].id == '') {
            this.props.actions.loadBackgrounds();
        }
    }

    backToAdminHome() {
        browserHistory.push('/Home');
    }

    onCreate() {
        this.open();
        this.setState({isCreate: true, selectedId: 0});
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    changeSelectedId(newId) {
        this.setState({selectedId: parseInt(newId)});
    }

    render() {
        const backgrounds = this.props.backgrounds;
        console.log(backgrounds);
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
                                <th className="text-center">Cost</th>
                                <th>Background Class (AC)</th>
                                <th>Strength</th>
                                <th>Stealth</th>
                                <th className="text-center">Weight</th>
                                <th>
                                    <div className="pull-right">
                                        <DndButton onClick={this.onCreate} buttonType="create" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <DndModal
                    headingCaption="Background"
                    closeModal={this.close}
                    isCreate={this.state.isCreate}
                    showModal={this.state.showModal}>
                    <div>OOOOOO</div>
                </DndModal>
            </div>
        );
    }
}
/*
                        <BackgroundList
                            backgrounds={backgrounds}
                            openModal={this.open}
                            selectedId={this.state.selectedId}
                            changeSelectedId={this.changeSelectedId}
                            />*/
/*
                    <BackgroundEntry
                        closeModal={this.close}
                        backgrounds={backgrounds}
                        isCreate={this.state.isCreate}
                        selectedId={this.state.selectedId}
                        picklists={this.props.picklists}
                        />*/
BackgroundListPage.propTypes = {
    actions: PropTypes.object,
    children: PropTypes.object,
    picklists: PropTypes.array,
    backgrounds: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    let picklists = Object.assign([{}], [util.objectModel.PICKLIST]);
    if (state.picklists.length > 0) {
        picklists = Object.assign([{}], state.picklists);
    }
    if (state.backgrounds.length > 0) {
        return {
            backgrounds: state.backgrounds,
            picklists: picklists
        };
    } else {
        return {
            backgrounds: [util.objectModel.BACKGROUND],
            picklists: picklists
        };
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundListPage);