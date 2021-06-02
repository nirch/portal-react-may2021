import React from 'react';
import PortalSearchPage from '../../components/SearchPager/PortalSearchPage';
import PortalTable from '../../components/PortalTable/PortalTable';
import { Button } from 'react-bootstrap';
import './TeachersCoursePage.css';

function StudentsCoursePage({teachers}) {

    const headers = [
        {
            "header": "שם",
            "key": "firstname"
        },
        {
            "header": "שם משפחה",
            "key": "lastname"
        },
        {
            "header": "אימייל",
            "key": "email"
        }
    ];

    return (
        <div className="c-course-details-tab">
            <PortalSearchPage placeholder={"חיפוש מדריך"} onSearch={() => {}} pages={0} currentPage={0} onPageChange={() => {alert("Hi")}}/>
            <PortalTable headers={headers} data={teachers} onClickRow={() => {}}/>
        </div>
    );
}

export default StudentsCoursePage;