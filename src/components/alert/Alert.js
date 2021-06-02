import React from 'react';
import './Alert.css'
import error_icon from '../../assets/images/error_icon.png';
import info_icon from '../../assets/images/info_icon.png';

const AlertComponent = ({text, type, onClose ,visibility}) => {
    return (
        <div className={`c-alert ${visibility}`}>
            <div className="close-btn-wrapper">
                <span className="close-btn" onClick={onClose}>&times;</span>
            </div>

            <div className="msg-wrapper">
                <img className="alert-icon" src={type === "error" ? error_icon : info_icon} alt=""/>
                <span className={`alert-msg type-${type}`}>{text}</span>
            </div>
        </div>
    );
}

export default AlertComponent;