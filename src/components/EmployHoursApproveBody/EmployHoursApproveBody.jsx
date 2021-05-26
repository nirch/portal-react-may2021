import React from 'react';
import './EmployHoursApproveBody.css';

function EmployHoursApproveBody({ employer }) {

    const selectAll = () => {

    };

    const approveSelected = () => {

    };

    const disapproveSelectd = () => {

    };

    return (
        <div className="employ-hours-approve-body">
            <div className="actions-buttons">
                <div className="select-all-container">
                    <div className="select-all-button" onClick={() => selectAll()} />
                    <div className="title-button">בחר הכל</div>
                </div>
                <div className="approve-selected-container">
                    <div className="approve-selected-button" onClick={() => approveSelected()}/>
                    <div className="title-button">אישור מסומנים</div>
                </div>
                <div className="disapprove-selected-container">
                    <div className="disapprove-selected-button" onClick={() => disapproveSelectd()}/>
                    <div className="title-button">דחיית מסומנים</div>
                </div>
            </div>
            <div className="data-rows">

            </div>

        </div>
    );
}

export default EmployHoursApproveBody;