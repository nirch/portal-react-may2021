import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import PortalPager from '../Pager/ProtalPager';
import './PortalSearchPager.css';

const PortalSearchPager = (props) => {
    const { placeholder } = props;
    const { onSearchEnter } = props;
    const { nextData } = props;
    const { prevData } = props;
    const { currData } = props;
    const { onPageClick } = props;
    const [input, setInput] = useState("");

    const onSearchSubmit=(e)=>{
        e.preventDefault();
        onSearchEnter(input);
    }
    return (

        <Container className="c-search-page">
            <form className="c-search-form" onSubmit={onSearchSubmit}>
                <input  className="search-input" 
                        placeholder={placeholder} 
                        onChange={(e)=>setInput(e.target.value)}/>
                <div className="c-search-pager">
                    <PortalPager className="c-search-pager" curr={currData}  next={nextData} prev={prevData} onPageClick={onPageClick} />
                </div>
            </form>
        </Container>
    );
}

export default PortalSearchPager;
