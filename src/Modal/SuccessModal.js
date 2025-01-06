import React from 'react';
import { CModal, CModalBody, CModalFooter, CButton } from '@coreui/react';
import { PiSealCheckFill } from 'react-icons/pi';

const SuccessModal = (props) => {
    return (
        <CModal show={props.show} onClose={props.handleClose} centered>
            <CModalBody className="modal-body">
                <PiSealCheckFill size={70} />
                <p>{props.text}</p>
            </CModalBody>
            <CModalFooter>
                <CButton 
                    className="p-button" 
                    color="primary" 
                    onClick={props.handleClose}
                >
                    확인
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

export default SuccessModal;
