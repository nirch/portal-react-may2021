import React from 'react'
import './PortalPager.css';
import arrow_left from '../../assets/images/arrow_left.png'
import arrow_right from '../../assets/images/arrow_right.png';

const PortalPager = ({curr,prev,next}) => {
    return (
        <>
            { curr ? 
            <div className="c-pager">
                <img className={!prev ? "c-pager-right-op":""} 
                    src={arrow_right} 
                    onClick={prev ? prev:null}></img>
                <span>
                    {curr}
                </span>
                <img className={!next ? "c-pager-left-op":""} 
                    src={arrow_left} 
                    onClick={next ? next:null}></img>
            </div>       
            :null } 
        </>
    );
}

export default PortalPager;