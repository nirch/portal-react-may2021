import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import PortalPager from '../Pager/ProtalPager';
import './PortalSearchPager.css';

const PortalSearchPager = ({placeholder, onSearch, pages, currentPage, onPageChange}) => {
    const [input, setInput] = useState("");

    const onSearchSubmit=(e)=>{
        e.preventDefault();
        onSearch(input);
    }
   
    const pageNumber = parseInt(currentPage, 10);
    const pagesNumber = parseInt(pages, 10);
    
    return (

        <Container className="c-search-page">
            <form className="c-search-form" onSubmit={onSearchSubmit}>
                <input  className="search-input" 
                        placeholder={placeholder} 
                        onChange={(e)=>setInput(e.target.value)}/>
                <div className="c-search-pager">
                    <PortalPager className="c-search-pager" 
                                curr={pagesNumber && pagesNumber>0 && pageNumber<pagesNumber? pageNumber + 1:""}  
                                next={pagesNumber && pagesNumber>0 && pageNumber+1<pagesNumber ? pageNumber + 2: ""}
                                prev={pagesNumber && pagesNumber>0 && pageNumber>=0 ? pageNumber:"" } 
                                type="number"
                                onPageClick={x=>onPageChange(x)} />
                </div>
            </form>
        </Container>
    );
}

export default PortalSearchPager;
