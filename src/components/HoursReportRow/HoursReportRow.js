import './HoursReportRow.css'

import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const HoursReportRow = ({report, reportingPerimeter}) => {
const [subject, setSubject] = useState();

useEffect(() => {
    reportingPerimeter.subjects.forEach(function (subject) {
        if(subject.reportsubjectid == report.actionid){
            setSubject(subject.subject);
        }
    });
  },[]);

    var mystyle = {
        backgroundColor: report.approval == 1 ? "#a1d47f" : report.approval == 0 ? "#ffd300" : "#ffa1a1"
    };

    return (
        <tr style={mystyle} className="c-hours-report-row">
            <td>{report.date}</td>
                <td>{reportingPerimeter.projectName}</td>
                {subject
                ? <td>{subject}</td>
                : null
                }
                <td><span>{parseFloat(report.finishhour)-parseFloat(report.starthour)}</span></td>
                <td className="icon-td"><BsThreeDotsVertical /></td>
        </tr>
    );
}
export default HoursReportRow;