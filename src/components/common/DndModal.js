import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class DndModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let actionText = '';
        if (this.props.canEdit) {
            if (this.props.isCreate) {
                actionText = 'Create';
            } else {
                actionText = 'Edit';
            }
        } else {
            actionText = 'View';
        }
        return (
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <h4>{actionText} {this.props.headingCaption}</h4>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        );
    }
}

DndModal.propTypes = {
    headingCaption: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    isCreate: PropTypes.bool,
    showModal: PropTypes.bool.isRequired,
    children: PropTypes.object,
    canEdit: PropTypes.bool
};

export default DndModal;
