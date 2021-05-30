import React from 'react';
import './CourseHeader.css';
import BackIcon from '../../assets/icons/noun_back_arrow_2690272.png';
import CopyIcon from '../../assets/icons/noun_copy_573715.png';
import SaveIcon from '../../assets/icons/noun_save_2429243.png';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function CourseHeader({name, subName}) {

    const history = useHistory();

    return (
        <div className="c-course-header">
            <div className="top">
                <h1>{subName}</h1>  
                <div className="icons">
                    <Button variant="outline" onClick={() => history.goBack()}><img src={BackIcon}/></Button>
                    <Button variant="outline"><img src={CopyIcon}/></Button>
                    <Button variant="outline"><img src={SaveIcon}/></Button>
                </div>
            </div>

            <h6>{name}</h6>
        </div>
    );
}

export default CourseHeader;