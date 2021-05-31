import React, { useContext, useEffect, useState } from 'react';
import './HoursCrud.css'
import HoursReportFooter from '../../components/HoursReportFooter/HoursReportFooter'
import PortalInput from '../../components/PortalInput/PortalInput'
import PortalSelect from '../../components/PortalSelect/PortalSelect'

const HoursCrud = (props) => {
    const [project, setProject] = useState();
    const [course, setCourse] = useState();
    const [subject, setSubject] = useState();

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [km, setKm] = useState();
    const [transportation, setTransportation] = useState();
    const [comment, setComment] = useState();



    const [courses, setCourses] = useState({ "value": 0, "name": "נושא פעילות" });
    const [subjects, setSubjects] = useState();


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
    }

    return (
        <div className="p-hours-crud">
            <div className="top-header"></div>
            <div className="bottom-header"></div>
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
                    handleSelection={(e) => setCourse(e)}
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
                            onHandleChange={(e)=>setStart(e)}
                            value={start}
                            
                        />
                    </div>
                    <div className="layout-input">
                        <PortalInput
                            placeholder="שעת סיום"
                            onHandleChange={(e)=>setEnd(e)}
                            value={end}
                        />
                    </div>
                </div>
                <div className="flex-box">
                    <div className="layout-input">
                        <PortalInput
                            placeholder='רכב פרטי (ק"מ)'
                            onHandleChange={(e)=>setKm(e)}
                            value={km}
                        />
                    </div>
                    <div className="layout-input">
                        <PortalInput
                            placeholder='תחבורה ציבורית (ש"ח)'
                            onHandleChange={(e)=>setTransportation(e)}
                            value={transportation}
                        />
                    </div>
                </div>
                <PortalInput
                    placeholder='הערות'
                    onHandleChange={(e)=>setComment(e)}
                    value={comment}
                />
            </form>
            <HoursReportFooter
                save={false}
                copy={true}
                add={true}
                del={true}
                back={true}
            />
        </div>
    );
}
export default HoursCrud;