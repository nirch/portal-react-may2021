import React, { useContext, useEffect, useState } from 'react';
import './HoursCrud.css'
import HoursReportFooter from '../../components/HoursReportFooter/HoursReportFooter'
import PortalInput from '../../components/PortalInput/PortalInput'
import PortalSelect from '../../components/PortalSelect/PortalSelect'
import PortalDatePicker from '../../components/PortalDatePicker/PortalDatePicker'
import PortalNavbar from '../../components/navbar/PortalNavbar';

import server from '../../shared/server'
import ActiveUserContext from '../../shared/activeUserContext'
import { useHistory, Route } from 'react-router-dom';


const HoursCrud = (props) => {
    const [courses, setCourses] = useState({ "value": 0, "name": "מס/שם קורס" });
    const [subjects, setSubjects] = useState();
    const [projects, setProjects] = useState([ 
        { "value": 0, "name": "פרויקט" },
        { "value": 6, "name": "פנימי" },
        { "value": 7, "name": "מחלקת ניהול ידע" }]
        );

    const [project, setProject] = useState();
    const [course, setCourse] = useState();
    const [subject, setSubject] = useState();

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [km, setKm] = useState();
    const [transportation, setTransportation] = useState();
    const [comment, setComment] = useState();

    // Current date on init
    const today= new Date();
    const [day, setDay] = useState(today.getDay());
    console.log(day)

    const activeUser = useContext(ActiveUserContext);
    const history = useHistory();


    const handleProjectSelection = (e) => {
        setProject(e)
        if (e == 2) {
            setCourses([
                { "value": 0, "name": "מס/שם קורס" },
                { "value": 1, "name": "הדרכה" },
            ])
            setSubjects([
                { "value": 0, "name": "נושא פעילות" },
                { "value": 1, "name": "ניהול" },
                { "value": 2, "name": "חופשה" },
                { "value": 3, "name": "חג" },
                { "value": 4, "name": "מחלה" },
            ])

        } else if (e == 1) {
            setCourses([
                { "value": 0, "name": "מס/שם קורס" },
                { "value": 1, "name": "כללי" },
                { "value": 2, "name": "קורס נסיון נטלי" },
                { "value": 3, "name": "יום תוכניות עבודה 2012" },
            ])
            setSubjects([
                { "value": 0, "name": "נושא פעילות" },
                { "value": 1, "name": "הדרכה" },
            ])
        } else {
            setCourses([{ "value": 0, "name": "נושא פעילות" }])
        }

        setProject(projects[e])
    }


    async function saveReport(start, end, project, course, subject,transportation, km) {
        console.log(project)

        const newReport = {reports: [{
            "reportid": "-1",
            "coursename": "כללי",
            // "copyreport": {
            //   "date": "03/06/2021",
            //   "projectid": "7",
            //   "actionid": "56",
            //   "finishhour": "12:15",
            //   "hours": "00:15",
            //   "starthour": "12:00",
            //   "carkm": 3,
            //   "cost": 3,
            //   "comment": "3"
            // },
            "status": "",
            "automatic": 0,
            "date": "03/06/2021",
            "projectid": project.value,
            // "projectid": project.value,
            "actionid": "60",
            "starthour": String(start),
            "finishhour": String(end),
            "hours": "00:15",
            "carkm": km,
            "cost": transportation,
            "comment": "3",
            "hoursvalid": true,
            "finishhourvalid": true,
            "starthourvalid": true,
            "noInterstion": true,
            "isSetProject": true,
            "isSetSubject": true
          }],
           token: activeUser.token, v: 2.3 
        }
           const reports = await server(activeUser, newReport, "SaveReports");
           history.push('/hours-report')
    }

    const getDay = (day) => {
        console.log(day)

    }

    const goBack = () => {
        history.push('/hours-report')
    }

    const handleSetCourse = (e) => {
        setCourse(e)
    }


    return (
        <div className="p-hours-crud">
            <PortalNavbar
                funcBack={()=>goBack()}
            />
            <div className="date-header">
                    <PortalDatePicker
                        type={"Day"}
                        onDateSelection={getDay}
                    />
                </div>
            <form action="">
                <PortalSelect
                    options={[
                        { "value": 0, "name": "פרויקט" },
                        { "value": 1, "name": "פנימי" },
                        { "value": 2, "name": "מחלקת ניהול ידע" }
                    ]}
                    value={project}
                    handleSelection={(e) => handleProjectSelection(e)}
                />
                <PortalSelect
                    options={courses}
                    // handleSelection={(e) => setCourse(e)}
                    handleSelection={handleSetCourse}
                    value={course}
                />
                <PortalSelect
                    options={subjects}
                    handleSelection={(e) => setSubject(e)}
                    value={subject}
                />

                <div className="flex-box">
                    <div className="layout-input">
                        <PortalInput
                            placeholder="שעת התחלה"
                            onHandleChange={(e) => setStart(e)}
                            value={start}
                        />
                    </div>
                    <div className="layout-input">
                        <PortalInput
                            placeholder="שעת סיום"
                            onHandleChange={(e) => setEnd(e)}
                            value={end}
                        />
                    </div>
                </div>
                <div className="flex-box">
                    <div className="layout-input">
                        <PortalInput
                            placeholder='רכב פרטי (ק"מ)'
                            onHandleChange={(e) => setKm(e)}
                            value={km}
                        />
                    </div>
                    <div className="layout-input">
                        <PortalInput
                            placeholder='תחבורה ציבורית (ש"ח)'
                            onHandleChange={(e) => setTransportation(e)}
                            value={transportation}
                        />
                    </div>
                </div>
                <PortalInput
                    placeholder='הערות'
                    onHandleChange={(e) => setComment(e)}
                    value={comment}
                />
            </form>
            <HoursReportFooter
                save={true}
                onSave={()=>saveReport(start,end, project, course, subject,transportation, km)}
                copy={true}
                add={false}
                del={true}
                back={true}
            />
        </div>
    );
}
export default HoursCrud;