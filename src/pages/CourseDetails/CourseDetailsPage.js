import React, { useContext } from 'react';
import './CourseDetailsPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import StudentsCoursePage from '../StudentsCoursePage/StudentsCoursePage';

const CourseDetailsPage = (props) => {
    const { handleLogout, students } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-course-details">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>פרטי קורס</h1>
            <StudentsCoursePage students={students}/>
        </div>
    );
}

export default CourseDetailsPage;