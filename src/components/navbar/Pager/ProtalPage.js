import React from 'react'
import './PortalPager.css';
import arrow_left from '../../../assets/images/arrow_left.png';
import arrow_right from '../../../assets/images/arrow_right.png';
import { Container } from 'react-bootstrap';

const PortalPager = (props) => {
    const { curr } = props;
    const { prev } = props;
    const { next } = props;

    return (
        <div className="c-pager">
            <img className={!prev ? "c-pager-right-op":""} src={arrow_right}></img>
            <span>
                {curr}
            </span>
            <img className={!next ? "c-pager-left-op":""} src={arrow_left}></img>
        </div>       
    );
}

export default PortalPager;