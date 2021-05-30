import React, { useContext, useEffect, useState } from 'react';
import './CourseDetailsPage.css';
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext';
import { Redirect, useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader/CourseHeader';
import server from '../../shared/server';

const CourseDetailsPage = ({handleLogout}) => {

    const [courseDetails, setCourseDetails] = useState({});
    const [teachers, setTeachers] = useState({});
    const [students, setStudents] = useState({});

    const activeUser = useContext(ActiveUserContext);

    const { id } = useParams();


    useEffect(() => {
        let payload = {
            "courseid": id,
            "token": activeUser.token,
            "v": "2.3"
        };

        server(activeUser, payload, "GetCourseById").then(res => setCourseDetails(res.data));

        payload = {
            "courseid": id,
            "page": 0,
            "roleid": 1,
            "search": "",
            "token": activeUser.token,
            "v": "2.3"
        }

        server(activeUser, payload, "GetCourseEnrollmentProfiles").then(res => setStudents(res.data));

        payload = {
            "courseid": id,
            "page": 0,
            "roleid": 2,
            "search": "",
            "token": activeUser.token,
            "v": "2.3"
        }

        server(activeUser, payload, "GetCourseEnrollmentProfiles").then(res => setTeachers(res.data));
    }, []);
    

    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-course-details">
            <PortalNavbar handleLogout={handleLogout}/>{console.log(students)}
            <CourseHeader name={courseDetails.name} subName={courseDetails.subname}/>
        </div>
    );
}

export default CourseDetailsPage;