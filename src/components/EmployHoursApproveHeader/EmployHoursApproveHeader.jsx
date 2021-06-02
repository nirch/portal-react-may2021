import React from 'react';
import './EmployHoursApproveHeader.scss';
import arrowDown from './../../assets/images/arrow_down.svg';
import arrowUp from './../../assets/images/arrow_up.svg'
import diff from './../../shared/utils';
function EmployHoursApproveHeader({ employee, index, openRow, setActiveKey}) {
  let totalHours = 0;
  let approvalHours = 0;
  let disapprovalHours = 0;
  let pendingHours = 0;

  for (const report of employee.reports) {
    const hours = diff(report.starthour, report.finishhour);
    totalHours += hours;
    report.approval === "1" ? approvalHours += hours
      : report.approval === "-1" ? disapprovalHours += hours
        : pendingHours += hours;
  }

  return (
    <div className="header-content">
      <div className="employee-name">{employee.firstname + " " + employee.lastname}</div>
      <div className="hours-tbl">
        <div className="pending-hours">{pendingHours.toFixed(2)}</div>
        <div className="approval-hours">{approvalHours.toFixed(2)}</div>
        <div className="disapproval-hours">{disapprovalHours.toFixed(2)}</div>
        <div className="total-hours">{totalHours.toFixed(2)}</div>
      </div>
      <CustomToggle className="arrow-container" eventKey={index} openRow={openRow}  setActiveKey={setActiveKey}/>
    </div>
  );
}
export default EmployHoursApproveHeader;
function CustomToggle({ eventKey, openRow, setActiveKey }) {
 
  return (
    <>
      {!openRow ?
        <img className="arrow-approval-row" src={arrowDown} type="button" onClick={()=>setActiveKey(eventKey)} alt="">
        </img> :
        <img className="arrow-approval-row" src={arrowUp} type="button" onClick={()=>setActiveKey("0")} alt="">
        </img>}
    </>

  );
}

