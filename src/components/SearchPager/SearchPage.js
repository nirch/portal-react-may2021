import React from 'react'
import { Container } from 'react-bootstrap';
import './SearchPage.css';

const SearchPager = (props) => {
    const { placeholder } = props;
    return (

        <Container className="c-search-page">
            <input className="search-input" placeholder={placeholder}>

            </input>
        </Container>
    );
}

export default SearchPager;
