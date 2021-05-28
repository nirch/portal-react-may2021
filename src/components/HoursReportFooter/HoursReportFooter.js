import './HoursReportFooter.css'
// import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { HiPlusCircle } from 'react-icons/hi';

const HoursReportFooter = () => {


    return (
        <div className="c-hours-report-footer">
            <img id='save-img' src={"/img/save.png"} width="24" height="24.8"></img>
            <img id='copy-img' src={"/img/copy.png"} width="22.8" height="24.9"></img>
               <BsPlusCircleFill/>
            <img id='delete-img' src={"/img/delete.png"} width="26.4" height="24.6"></img>
            <img id='back-img' src={"/img/back.png"} width="27.5" height="19.8"></img>
        </div>
    );
}

export default HoursReportFooter;