import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import PortalPager from '../navbar/Pager/ProtalPage';
import './PortalSearchPager.css';

const PortalSearchPager = (props) => {
    const { placeholder } = props;
    const { onSearchEnter } = props;
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
                    <PortalPager className="c-search-pager" curr="1"  next="3"/>
                </div>
            </form>
        </Container>
    );
}

export default PortalSearchPager;
