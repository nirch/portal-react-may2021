import React from 'react';
import './CourseHeader.css';
import BackIcon from '../../assets/icons/noun_back_arrow_2690272.png';
import CopyIcon from '../../assets/icons/noun_copy_573715.png';
import SaveIcon from '../../assets/icons/noun_save_2429243.png';

function CourseHeader({name, subName}) {

    return (
        <div className="c-course-header">
            <div className="top">
                <h1>{subName}</h1>  
                <div className="icons">
                    <img src={BackIcon}/>
                    <img src={CopyIcon}/>
                    <img src={SaveIcon}/>
                </div>
            </div>
            <h6>{name}</h6>
        </div>
    );
}

export default CourseHeader;