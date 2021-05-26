import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import PortalPager from '../Pager/ProtalPager';
import './PortalSearchPager.css';

const PortalSearchPager = (props) => {
    const { placeholder } = props;
    const { onSearch } = props;
    const { pages } = props;
    const { currentPage } = props;
    const { onPageChange } = props;
    const [input, setInput] = useState("");

    const onSearchSubmit=(e)=>{
        e.preventDefault();
        onSearch(input);
    }
    const pageNumber = parseInt(currentPage, 10);
    const pagesNumber = parseInt(pages);

    return (

        <Container className="c-search-page">
            <form className="c-search-form" onSubmit={onSearchSubmit}>
                <input  className="search-input" 
                        placeholder={placeholder} 
                        onChange={(e)=>setInput(e.target.value)}/>
                <div className="c-search-pager">
                    <PortalPager className="c-search-pager" 
                                curr={pages && parseInt(pages)>0 && pageNumber<pagesNumber? pageNumber + 1:""}  
                                next={pages && parseInt(pages)>0 && pageNumber+1<pagesNumber ? pageNumber + 2: ""}
                                prev={pages && parseInt(pages)>0 && pageNumber>0 ? pageNumber:"" } 
                                onPageClick={onPageChange} />
                </div>
            </form>
        </Container>
    );
}

export default PortalSearchPager;
