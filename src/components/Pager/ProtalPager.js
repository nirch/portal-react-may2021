import React from 'react'
import './PortalPager.css';
import arrow_left from '../../assets/images/arrow_left.png'
import arrow_right from '../../assets/images/arrow_right.png';

const PortalPager = (props) => {
    const { curr } = props;
    const { prev } = props;
    const { next } = props;
    const { onPageClick } = props;

    function onPrevClick() {
        if(prev){
            onPageClick(prev-1);
        }
    }
    function onNextClick(){
        if (next){
            onPageClick(next-1);
        }
    }
    return (
        <>
            { curr ? 
            <div className="c-pager">
                <img className={!prev ? "c-pager-right-op":""} src={arrow_right} onClick={onPrevClick}></img>
                <span>
                    {curr}
                </span>
                <img className={!next ? "c-pager-left-op":""} src={arrow_left} onClick={onNextClick}></img>
            </div>       
            :null } 
        </>
    );
}

export default PortalPager;