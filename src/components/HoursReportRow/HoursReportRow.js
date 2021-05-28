import './HoursReportRow.css'

import { BsThreeDotsVertical } from 'react-icons/bs';

const HoursReportPage = (props, key) => {
    const subjects = props.subjects
    var mystyle = {
        backgroundColor: props.approval == 1 ? "#a1d47f" : props.approval == 0 ? "#ffd300" : "#ffa1a1"
    };

    return (
        <tr style={mystyle} className="c-hours-report-row">
            <td>{props.date}</td>
            <td>{props.projectName}</td>
            <td><select>{subjects.map(subject => <option>{subject.subject}</option>)}</select></td>
            <td><span>{parseFloat(props.finishhour)-parseFloat(props.starthour)}</span></td>
            <td className="icon-td"><BsThreeDotsVertical /></td>
        </tr>
    );
}

export default HoursReportPage;