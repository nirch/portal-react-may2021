import './HoursReportRow.css'

import { BsThreeDotsVertical } from 'react-icons/bs';

const HoursReportPage = (props) => {

    console.log(props)
    const subjects = props.subjects

    console.log(subjects)
    if(props.approval == 1){ 
        var mystyle = {
            backgroundColor: "#a1d47f"
        };
    }else if(props.approval == 0){
        var mystyle = {
            backgroundColor: "#ffd300"
          };

    }else{
        var mystyle = {
            backgroundColor: "#ffa1a1"
          };

    }

    return (
        <tr style={mystyle} className="c-hours-report-row">
            <td>{props.date}</td>
            <td>{props.projectName}</td>
            {/* <td>{props.subjects[0].subject}</td> */}
            <td><select>{subjects.map(subject => <option>{subject.subject}</option>)}</select></td>
            <td><span>{parseFloat(props.finishhour)-parseFloat(props.starthour)}</span></td>
            <td className="icon-td"><BsThreeDotsVertical /></td>
        </tr>
    );
}

export default HoursReportPage;