import './HoursReportFooter.css'
import { BsPlusCircleFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import saveIcon from '../../assets/images/save.png';
import unsaveIcon from '../../assets/images/noun_save_2429243.png';
import copyIcon from '../../assets/images/noun_copy_573715.png';
import uncopyIcon from '../../assets/images/disabled-copy.png';
import deleteIcon from '../../assets/images/noun_delete_1610851.png';
import undeleteIcon from '../../assets/images/disabled-delete.png';
import backIcon from '../../assets/images/back.png';
import unbackIcon from '../../assets/images/noun_back_arrow_2690272.png';
import React from 'react';


const HoursReportFooter = ({ save, copy, add, del, back, onSave }) => {
    const myStyle = {
        color: add ? '' : '#EEEEEE'
    }

    const history = useHistory();
    const handleOnClick = () => history.push('/hours-crud');

    return (
        
            <div className="c-hours-report-footer">
                <div className="icons-warper">
                {save
                    ? <img id='save-img' src={saveIcon} width="24" height="24.8"></img>
                    : <img id='save-img' src={unsaveIcon} width="24" height="24.8"></img>}
                {copy
                    ? <img id='copy-img' src={copyIcon} width="22.8" height="24.9"></img>
                    : <img id='copy-img' src={uncopyIcon} width="22.8" height="24.9"></img>
                }
                <BsPlusCircleFill style={myStyle} onClick={handleOnClick}/>
                {del
                    ? <img id='delete-img' src={deleteIcon} width="26.4" height="24.6"></img>
                    : <img id='delete-img' src={undeleteIcon} width="26.4" height="24.6"></img>
                }
                {back
                    ? <img id='back-img' src={backIcon} width="27.5" height="19.8"></img>
                    : <img id='back-img' src={unbackIcon} width="27.5" height="19.8"></img>

                }
            </div>
        </div>
    );
}

export default HoursReportFooter;