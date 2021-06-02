import React from 'react';
import PortalSearchPage from '../SearchPager/PortalSearchPage';
import PortalTable from '../PortalTable/PortalTable';
import './TeachersCourseTab.css';

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