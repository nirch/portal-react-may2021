import { useAccordionToggle } from "react-bootstrap";
import React, { useState } from 'react';
import './EmployHoursApproveHeader.css';
import arrowDown from './../../assets/images/arrow_down.svg';
import arrowUp from './../../assets/images/arrow_up.svg'

function EmployHoursApproveHeader({ employer, index }) {
  const [arrowType, setArrowType] = useState(true);
  let totalHours = 0;
  let approvalHours = 0;
  let disapprovalHours = 0;
  let pendingHours = 0;

  for (const report of employer.reports) {
    
    const hours = diff(report.starthour, report.finishhour);
    totalHours += hours;
    report.approval === "1" ? approvalHours += hours
      : report.approval === "-1" ? disapprovalHours += hours
        : pendingHours += hours;
  }



  return (
    <div className="header-content">
      <div className="employ-name">{employer.firstname + " " + employer.lastname}</div>
      <div className="hours-tbl">
        <div className="pending-hours">{pendingHours.toFixed(2)}</div>
        <div className="approval-hours">{approvalHours.toFixed(2)}</div>
        <div className="disapproval-hours">{disapprovalHours.toFixed(2)}</div>
        <div className="total-hours">{totalHours.toFixed(2)}</div>
      </div>
      <CustomToggle className="arrow-container" eventKey={index} arrowType={arrowType} setArrowType={setArrowType}></CustomToggle>

    </div>
  );
}



export default EmployHoursApproveHeader;
function CustomToggle({ children, eventKey, arrowType, setArrowType }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    setArrowType(!arrowType)
    // console.log('totally custom!'),
  );

  return (
    <>
      {arrowType ?
        <img className="arrow-approval-row" src={arrowDown} type="button" onClick={decoratedOnClick} alt="">
        </img> :
        <img className="arrow-approval-row" src={arrowUp} type="button" onClick={decoratedOnClick} alt="">
        </img>}
    </>

  );
}


//this function copied from stackoverflow
function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0)
    hours = hours + 24;

  // return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
  let temp = hours + (minutes / 60);
  console.log(temp);
  return temp;
}