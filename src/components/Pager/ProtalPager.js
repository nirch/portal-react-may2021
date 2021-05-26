import React from 'react'
import './PortalPager.css';
import arrow_left from '../../../assets/images/arrow_left.png';
import arrow_right from '../../../assets/images/arrow_right.png';
import { Container } from 'react-bootstrap';

const PortalPager = (props) => {
    const { curr } = props;
    const { prev } = props;
    const { next } = props;
    const { onPageClick } = props;

    function onPrevClick() {
        if(prev){
            onPageClick(prev);
        }
    }
    function onNextClick(){
        if (next){
            onPageClick(next);
        }
    }
    return (
        <div className="c-pager">
            <img className={!prev ? "c-pager-right-op":""} src={arrow_right} onClick={onPrevClick}></img>
            <span>
                {curr}
            </span>
            <img className={!next ? "c-pager-left-op":""} src={arrow_left} onClick={onNextClick}></img>
        </div>       
    );
}

export default PortalPager;