import React, { useContext, useEffect, useState } from 'react';
import './HoursReportPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import HoursReportRow from '../../components/HoursReportRow/HoursReportRow'
import HoursReportFooter from '../../components/HoursReportFooter/HoursReportFooter'
import { Redirect } from 'react-router-dom'
import server from '../../shared/server'


const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [reports, setReports] = useState([]);
    const [reportingPerimeter, setReportingPerimeter] = useState()

    // Get Report Data
    useEffect(() => {
        async function fetchReportrData() {
            try {
                const reportrData = { month: 5, year: 2021 };
                const reports = await server(activeUser, reportrData, "GetReports");
                setReports(reports.data);
            } catch {
                console.error("No reports")
            }
        }

        // fetchPerimeterData();
        if (activeUser) {
            fetchReportrData();
        }
    }, [activeUser])

    // Get Perimeter Data
    useEffect(() => {
        async function fetchPerimeterData() {
            try {
                const perimeterData = { token: activeUser.token, v: 2.3 };
                const perimeter = await server(activeUser, perimeterData, "GetMyReportingPerimeter");
                setReportingPerimeter(perimeter.data);
            } catch {
                console.error("No perimeter")
            }
        }
        // fetchPerimeterData();
        if (activeUser) {
            fetchPerimeterData();
        }
    }, [activeUser])


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
                        {reports.length != 0 && reportingPerimeter 
                            ? <tbody>{reports.map((report) =>
                                <HoursReportRow
                                    key={report.projectid}
                                    {...report}
                                    {...reportingPerimeter[report.projectid]}
                                />)}
                              </tbody>
                            : null
                        }
                </table>
            </div>
            <HoursReportFooter 
                save={true}
                copy={true}
                del={true}
                back={true}
            />
        </div>
    );
}
export default HoursReportPage;