import React from 'react';
import './Alert.css'

const AlertComponent = (props) => {
    return (
        <div className="c-alert" >
            <span className="close-btn">&times;</span>
            <div className="error-message">סיסמה שגויה</div>
        </div>
    );
}

export default AlertComponent;