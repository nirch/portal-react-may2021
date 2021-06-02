import React, { useContext, useEffect, useState } from 'react';
import './CourseDetailsPage.css';
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom';
import StudentsCoursePage from '../StudentsCoursePage/StudentsCoursePage';
import CourseHeader from '../../components/CourseHeader/CourseHeader';
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import server from '../../shared/server';


const CourseDetailsPage = ({handleLogout}) => {

    const [courseDetails, setCourseDetails] = useState({});
    const [teachers, setTeachers] = useState({});
    const [students, setStudents] = useState({});

    const activeUser = useContext(ActiveUserContext);

    const { id } = useParams();

    const courseTabs = [
        {
            "header": "קורס",
            "view": <></>
        },
        {
            "header": "סילבוס",
            "view": <></>
        },
        {
            "header": "סטודנטים",
            "view": <></>
        },
        {
            "header": "מדריכים",
            "view": <></>
        }
    ];

    useEffect(() => {
        
        let payload = {
            "courseid": id,
            "page": 0,
            "roleid": 1,
            "search": "",
        }
        server(activeUser, payload, "GetCourseById").then(res => setCourseDetails(res.data));

        server(activeUser, payload, "GetCourseEnrollmentProfiles").then(res => setStudents(res.data.enrolled));

        payload["roleid"] = 2;

        server(activeUser, payload, "GetCourseEnrollmentProfiles").then(res => setTeachers(res.data.enrolled));

    }, []);
    

    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-course-details">
            <PortalNavbar handleLogout={handleLogout}/>
            <CourseHeader name={courseDetails.name} subName={courseDetails.subname}/>
            <PortalTabView tabs={courseTabs}/>
        </div>
    );
}

export default CourseDetailsPage;