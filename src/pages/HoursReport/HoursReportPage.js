import React, { useContext } from 'react';
import './HoursReportPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs';

const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const GetReports =
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
    };

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
        <div className="p-hours-report">
            <PortalNavbar handleLogout={handleLogout} />
            <div>
                <table>
                    <tr className="table-header">
                        <th>תאריך</th>
                        <th>פרויקט</th>
                        <th>נושא פעילות</th>
                        <th>סה"כ שעות</th>
                        <th></th>

                    </tr>
                    <tr className="table-row">
                        <td>Jill</td>
                        <td>John</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td className="icon-td"><BsThreeDotsVertical/></td>
                    </tr>
                    <tr className="table-row">
                        <td>Eve</td>
                        <td>John</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td className="icon-td"><BsThreeDotsVertical/></td>
                    </tr>
                    
                        <tr className="table-row">
                            <td>John</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td className="icon-td"><BsThreeDotsVertical/></td>
                        </tr>
                    
                    <tr className="table-row">
                            <td>John</td>
                            <td>Doe</td>
                            <td>80</td>
                            <td>80</td>
                            <td className="icon-td"><BsThreeDotsVertical/></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default HoursReportPage;