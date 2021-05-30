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
            <h6>Students</h6>
            <table>
                <tr><th>First Name</th><th>Last Name</th></tr>
                {students.enrolled.map((student, index) => <tr><td key={index}>{student.firstname}</td> <td key={index}>{student.lastname}</td></tr>)}
            </table>
            <h6>Sylabus</h6>
            <ul>
                {courseDetails.subjects.map((subject, index) => <li key={index}>{subject["subject"]}</li>)}
            </ul>
            <h6>Teachers</h6>
            <ul>
                {teachers.enrolled.map((teacher, index) => <li key={index}>{teacher.firstname} {teacher.lastname}</li>)}
                {console.log(teachers)}
            </ul>
        </div>
    );
}

export default CourseDetailsPage;