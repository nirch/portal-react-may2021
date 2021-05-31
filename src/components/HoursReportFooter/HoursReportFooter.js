import './HoursReportFooter.css'
// import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { HiPlusCircle } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import React from 'react';


const HoursReportFooter = ({ save, copy, add, del, back }) => {

    const myStyle = {
        color: add ? '' : '#EEEEEE'
    }

    const history = useHistory();
    const handleOnClick = () => history.push('/hours-crud');

    return (
        
            <div className="c-hours-report-footer">
                <div className="icons-warper">
                {save
                    ? <img id='save-img' src={"/img/save.png"} width="24" height="24.8"></img>
                    : <img id='save-img' src={"/img/drawable-hdpi/noun_save_2429243.png"} width="24" height="24.8"></img>}

                {copy
                    ? <img id='copy-img' src={"/img/drawable-hdpi/noun_copy_573715.png"} width="22.8" height="24.9"></img>
                    : <img id='copy-img' src={"/img/drawable-hdpi/disabled-copy.png"} width="22.8" height="24.9"></img>
                }
                <BsPlusCircleFill style={myStyle} onClick={handleOnClick}/>
                {del
                    ? <img id='delete-img' src={"/img/drawable-hdpi/noun_delete_1610851.png"} width="26.4" height="24.6"></img>
                    : <img id='delete-img' src={"/img/drawable-hdpi/disabled-delete.png"} width="26.4" height="24.6"></img>
                }
                {back
                    ? <img id='back-img' src={"/img/back.png"} width="27.5" height="19.8"></img>
                    : <img id='back-img' src={"/img/drawable-hdpi/noun_back_arrow_2690272.png"} width="27.5" height="19.8"></img>

                }
            </div>
        </div>
    );
}

export default HoursReportFooter;