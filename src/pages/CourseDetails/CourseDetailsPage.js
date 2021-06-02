import React, { useContext, useEffect, useState } from 'react';
import './CourseDetailsPage.css';
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useParams } from 'react-router-dom';
import SylabusCoursePage from '../../components/SylabusCourseTab/SylabusCourseTab';
import StudentsCourseTab from '../../components/StudentsCourseTab/StudentsCourseTab';
import TeachersCourseTab from '../../components/TeachersCourseTab/TeachersCourseTab';
import CourseHeader from '../../components/CourseHeader/CourseHeader';
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import server from '../../shared/server';
import CoursePageDetailsTab from '../../components/CoursePageDetailsTab/CoursePageDetailsTab';

const CourseDetailsPage = ({handleLogout}) => {

    const [courseDetails, setCourseDetails] = useState({});
    const [teachers, setTeachers] = useState({});
    const [students, setStudents] = useState({});

    const activeUser = useContext(ActiveUserContext);

    const { id } = useParams();

    const courseTabs = [
        {
            "header": "קורס",
            "view": <CoursePageDetailsTab courseid={id}/>
        },
        {
            "header": "סילבוס",
            "view": <SylabusCoursePage courseName={courseDetails.name} subjects={courseDetails.subjects}/>
        },
        {
            "header": "סטודנטים",
            "view": <StudentsCourseTab students={students}/>
        },
        {
            "header": "מדריכים",
            "view": <TeachersCourseTab teachers={teachers}/>
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