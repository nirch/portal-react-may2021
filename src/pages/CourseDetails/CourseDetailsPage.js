import React, { useContext, useEffect, useState } from 'react';
import './CourseDetailsPage.css';
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext';
import { Redirect, useParams } from 'react-router-dom';
import CourseHeader from '../../components/CourseHeader/CourseHeader';
import server from '../../shared/server';

const CourseDetailsPage = ({handleLogout}) => {

    const [courseDetails, setCourseDetails] = useState({});

    const activeUser = useContext(ActiveUserContext);

    const { id } = useParams();

    const payload = {
        "courseid": id,
        "token": activeUser.token,
        "v": "2.3"
    };


    useEffect(() => {
        server(activeUser, payload, "GetCourseById").then(res => setCourseDetails(res.data));
    }, []);
    

    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-course-details">
            <PortalNavbar handleLogout={handleLogout}/>
            <CourseHeader name={courseDetails.name} subName={courseDetails.subname}/>
        </div>
    );
}

export default CourseDetailsPage;