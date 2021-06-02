import React from 'react';
import PortalSearchPage from '../SearchPager/PortalSearchPage';
import PortalTable from '../PortalTable/PortalTable';
import { Button } from 'react-bootstrap';
import './StudentsCourseTab.css';

function StudentsCoursePage({students}) {

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
            <PortalSearchPage placeholder={"חיפוש חניך"} onSearch={() => {}} pages={0} currentPage={0} onPageChange={() => {alert("Hi")}}/>
            <PortalTable headers={headers} data={students} onClickRow={() => {}}/>
            <Button className="footer-button">הוסף סטודנט</Button>
        </div>
    );
}

export default StudentsCoursePage;