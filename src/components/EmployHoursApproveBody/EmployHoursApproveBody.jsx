import React from 'react';
import './EmployHoursApproveBody.css';

function EmployHoursApproveBody({ employer }) {
    const disapproveReport = reportId => {};
    const pendingReport = reportId => {};
    const approveReport = reportId => {};

    const reportsRows = employer.reports.map((report,index) =>{
        return(
            <>
             <div className="report-row-buttons">
                 <div className="disapprove-container">
                     <div>דחה</div>
                     <div onClick={()=>disapproveReport(report.reportid)} className={report.approval ==="-1" ? "disapprove-button selected" : "disapprove-button"}>
                         {report.approval ==="-1"?
                         <div className="disapprove-button selected inside"></div> :null}
                     </div>
                 </div>
                 <div className="pending-container">
                     <div>ממתין</div>
                     <div onClick={()=>pendingReport(report.reportid)}className={report.approval === "0" ? "pending-button selected" : "pending-button"}>
                     {report.approval ==="0"?
                         <div className="pending-button selected inside"></div> :null}
                     </div>
                 </div>
                 <div className="approve-container">
                     <div>אשר</div>
                     <div onClick={()=>approveReport(report.reportid)} className={report.approval === "1" ? "approve-button selected" : "approve-button"}>
                     {report.approval ==="1"?
                         <div className="approve-button selected inside"></div> :null}
                     </div>
                 </div>
             </div>
             <div className={report.approval ==="-1" ? "report-row-data red" : report.approval ==="0"? "report-row-data yellow" : "report-row-data green"}>
                <div></div>
                <div></div>
             </div>
            </>
        )
    })
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
                {reportsRows ? reportsRows : null}
            </div>

        </div>
    );
}

export default EmployHoursApproveBody;