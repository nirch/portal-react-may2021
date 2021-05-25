import React, { useContext } from 'react';
import './HoursReportPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import HoursReportRow from '../../components/HoursReportRow/HoursReportRow'
import { Redirect } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs';

const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);

   

    const reports = [
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81762",
            "date": "23/05/2021",
            "courseid": null,
            "projectid": "7",
            "actionid": "49",
            "starthour": "15:00",
            "finishhour": "16:15",
            "carkm": null,
            "cost": null,
            "comment": "",
            "reportcopyid": "80994",
            "automatic": "0",
            "approval": "0",
            "checkdate": null,
            "missingreportsubject": "0",
            "copyreport": {
                "date": "23/05/2021",
                "projectid": "7",
                "actionid": "49",
                "courseid": null,
                "starthour": "15:00",
                "finishhour": "16:15",
                "cost": null,
                "carkm": null,
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81761",
            "date": "24/05/2021",
            "courseid": "1079",
            "projectid": "6",
            "actionid": "1",
            "starthour": "09:45",
            "finishhour": "11:00",
            "carkm": "15",
            "cost": null,
            "comment": "",
            "reportcopyid": "80993",
            "automatic": "0",
            "approval": "1",
            "checkdate": "2021-05-24 09:38:53",
            "missingreportsubject": "0",
            "copyreport": {
                "date": "24/05/2021",
                "projectid": "6",
                "actionid": "1",
                "courseid": "1079",
                "starthour": "09:45",
                "finishhour": "11:00",
                "cost": null,
                "carkm": "15",
                "comment": ""
            }
        },
        {
            "userid": "950",
            "reportid": "81761",
            "date": "24/05/2021",
            "courseid": "1079",
            "projectid": "6",
            "actionid": "1",
            "starthour": "09:45",
            "finishhour": "11:00",
            "carkm": "15",
            "cost": null,
            "comment": "",
            "reportcopyid": "80993",
            "automatic": "0",
            "approval": "-1",
            "checkdate": "2021-05-24 09:38:53",
            "missingreportsubject": "0",
            "copyreport": {
                "date": "24/05/2021",
                "projectid": "6",
                "actionid": "1",
                "courseid": "1079",
                "starthour": "09:45",
                "finishhour": "11:00",
                "cost": null,
                "carkm": "15",
                "comment": ""
            }
        },
    ]

    const GetMyReportingPerimeter =
    {
        "6": {
            "projectid": "6",
            "projectName": "פנימי",
            "courses": [
                {
                    "courseid": "398",
                    "courseName": "קורס ניסיון נטלי"
                },
                {
                    "courseid": "1079",
                    "courseName": "יום תכניות עבודה 2019"
                }
            ],
            "subjects": [
                {
                    "reportsubjectid": "1",
                    "subject": "הדרכה"
                }
            ]
        },
        "7": {
            "projectid": "7",
            "projectName": "מחלקת ניהול ידע",
            "courseid": null,
            "courseName": null,
            "courses": [],
            "subjects": [
                {
                    "reportsubjectid": "49",
                    "subject": "ניהול "
                },
                {
                    "reportsubjectid": "52",
                    "subject": "חופשה "
                },
                {
                    "reportsubjectid": "54",
                    "subject": "חג "
                },
                {
                    "reportsubjectid": "66",
                    "subject": "מחלה "
                }
            ]
        }
    }

    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <PortalNavbar handleLogout={handleLogout} />
            <div className="p-hours-report">
                <table>
                    <thead>
                        <tr>
                        <th>תאריך</th>
                        <th>פרויקט</th>
                        <th>נושא פעילות</th>
                        <th>סה"כ שעות</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {reports.map(report =>
                        <HoursReportRow
                            {...report}
                            {...GetMyReportingPerimeter[report.projectid]}
                        />
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HoursReportPage;