import React from 'react';
import { CModal, CModalBody, CModalFooter, CButton } from '@coreui/react';
import { FiCheckCircle } from 'react-icons/fi';  // Feather 아이콘 사용

const SuccessModal = (props) => {
    return (
        <CModal show={props.show} onClose={props.handleClose} centered>
            <CModalBody className="modal-body">
                <FiCheckCircle size={70} />  {/* 다른 아이콘으로 변경 */}
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
