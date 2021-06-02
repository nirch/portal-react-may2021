import React, { useState } from 'react';
import './ConfirmationModal.css';
import Modal from 'react-modal';

function ConfirmationModal({show, onClose, onSubmit, title, inputType}) {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="c-confirmation-modal">
            <Modal
                isOpen={show}
                onRequestClose={onClose}>
                    <div className="close-btn-wrapper">
                      <span className="close-btn" onClick={onClose}>&times;</span>
                    </div>
                    <h1 className="modal-title">{title}</h1>
					{inputType && <input value={inputValue} type={inputType} onChange={e => setInputValue(e.target.value)}/>}
					<div className="modal-footer">
                        <div onClick={onSubmit}>אישור</div>
						<div onClick={onClose}>ביטול</div>
                    </div>
            </Modal>
        </div>
    );
}

export default ConfirmationModal;