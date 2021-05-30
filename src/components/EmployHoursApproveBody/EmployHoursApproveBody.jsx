import React, { useState } from 'react';
import './EmployHoursApproveBody.scss';

function EmployHoursApproveBody({ employee, employeeIndex, diff, changeEmployees }) {
    const [selectAllReports, setSelectAllReports] =  useState(false);
    const [checkedReports, setCheckedReports] = useState();
    const disapproveReport = (index) => {
        changeEmployees(employeeIndex, index, "-1")
    };
    const pendingReport = (index) => {
        changeEmployees(employeeIndex, index, "0")
    };
    const approveReport = (index) => {
        changeEmployees(employeeIndex, index, "1")
    };

    const handleChange = (e) =>  {
        if(e.target.checked === true){
            const checkedReportsClone = [...checkedReports];
            checkedReportsClone[e.target.value] = true;
            setCheckedReports(checkedReportsClone)
        }else{
            const checkedReportsClone = [...checkedReports];
            checkedReportsClone[e.target.value] = false;
            setCheckedReports(checkedReportsClone)
       }
    }
    const reportsRows = employee.reports.map((report, index) =>{
        let curseName="-";
        if(report.courseid != null){
            curseName = employee.reportingPerimeter[report.projectid].courses.filter(course => course.courseid === report.courseid)[0].courseName;
        }
        let subjectName="-";
        if(report.actionid != null){
            subjectName = employee.reportingPerimeter[report.projectid].subjects.filter(subject => subject.reportsubjectid === report.actionid)[0].subject;
        }
        const projectName = employee.reportingPerimeter[report.projectid].projectName;
        return(
            <div className="report-row-container" key={report.reportid}>
             <div className="report-row-buttons">
                 <div className="disapprove-container">
                     <div>דחה</div>
                     <div onClick={()=>disapproveReport(index)} className={report.approval ==="-1" ? "disapprove-button selected" : "disapprove-button"}>
                         {report.approval ==="-1"?
                         <div className="disapprove-button selected inside"></div> :null}
                     </div>
                 </div>
                 <div className="pending-container">
                     <div>ממתין</div>
                     <div onClick={()=>pendingReport(index)}className={report.approval === "0" ? "pending-button selected" : "pending-button"}>
                     {report.approval ==="0"?
                         <div className="pending-button selected inside"></div> :null}
                     </div>
                 </div>
                 <div className="approve-container">
                     <div>אשר</div>
                     <div onClick={()=>approveReport(index)} className={report.approval === "1" ? "approve-button selected" : "approve-button"}>
                     {report.approval ==="1"?
                         <div className="approve-button selected inside"></div> :null}
                     </div>
                 </div>
             </div>
             <div className={report.approval ==="-1" ? "report-row-data red" : report.approval ==="0"? "report-row-data yellow" : "report-row-data green"}>
                <div className="up-row-report-data">
                    <div className="checkbox-report-container">
                        <input type="checkbox" onChange={handleChange} value={index} className="checkbox-report" checked={selectAllReports ? selectAllReports : null}></input>
                    </div>
                    <div className="date-of-report">תאריך: {report.date}</div>
                    <div className="sum-hours-report">סה"כ שעות: {diff(report.starthour,report.finishhour)}</div>
                </div>
                <div className="down-row-report-data">
                    <div className="project-name-container">
                        <div className="project-name-label">פרוייקט</div>
                        <div className="project-name">{projectName}</div>
                    </div>
                    <div className="course-container">
                        <div className="course-name-label">מס/שם קורס</div>
                        <div className="course-name">{curseName}</div>
                    </div>
                    <div className="task-subject-container">
                        <div className="task-subject-label">נושא פעילות</div>
                        <div className="task-subject">{subjectName}</div>
                    </div>
                </div>
             </div>
            </div>
        )
    }) ;
    const selectAll = () => {
        const checkedReportsClone = employee.reports.map(report => !selectAllReports);
        setCheckedReports(checkedReportsClone);
        setSelectAllReports(!selectAllReports);
    };

    const approveSelected = () => {
        for(let i=0; i < employee.reports.length; i++){
            if(checkedReports[i] === true){
                changeEmployees(employeeIndex, i, "1")
            }
        }
    };

    const disapproveSelectd = () => {
        for(let i=0; i < employee.reports.length; i++){
            if(checkedReports[i] === true){
                changeEmployees(employeeIndex, i, "-1")
            }
        }
    };

    return (
        <div className="employ-hours-approve-body">
            {employee.reports.length > 0 ? 
            <div className="actions-buttons">
                <div className="select-all-container">
                    <div className={selectAllReports ? "select-all-button checked":"select-all-button"} onClick={() => selectAll()} />
                    <div className="title-button">בחר הכל</div>
                </div>
                <div className="approve-selected-container">
                    <div className="approve-selected-button" onClick={approveSelected}/>
                    <div className="title-button">אישור מסומנים</div>
                </div>
                <div className="disapprove-selected-container">
                    <div className="disapprove-selected-button" onClick={disapproveSelectd}/>
                    <div className="title-button">דחיית מסומנים</div>
                </div>
            </div>: null}
            <div className="data-rows">
                {reportsRows ? reportsRows : null}
            </div> 
        </div>
    );
}

export default EmployHoursApproveBody;