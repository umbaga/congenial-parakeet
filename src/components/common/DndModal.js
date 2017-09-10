import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class DndModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton><h4>{this.props.isCreate ? 'Create' : 'Edit'} Item Type</h4></Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            
        );
    }
}

DndModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isCreate: PropTypes.bool,
    showModal: PropTypes.bool.isRequired
};

export default DndModal;
