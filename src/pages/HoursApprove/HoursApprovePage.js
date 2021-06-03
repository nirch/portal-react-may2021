import React, { useContext, useEffect, useState } from 'react';
import './HoursApprovePage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import PortalDatePicker from './../../components/PortalDatePicker/PortalDatePicker';
import ActiveUserContext from '../../shared/activeUserContext';
import HoursReportFooter from '../../components/HoursReportFooter/HoursReportFooter';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Accordion, Card } from 'react-bootstrap';
import EmployHoursApproveHeader from '../../components/EmployHoursApproveHeader/EmployHoursApproveHeader';
import EmployHoursApproveBody from '../../components/EmployHoursApproveBody/EmployHoursApproveBody';
import PortalSearchPager from '../../components/SearchPager/PortalSearchPage';
import server from '../../shared/server';

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const [employees, setEmployees] = useState();
    const [inputTextForSearch, setInputTextForSearch] = useState("");
    const [activeKey, setActiveKey] = useState(0);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectAllReports, setSelectAllReports] =  useState(false);
    const [reload, setReload] = useState(true);
    const activeUser = useContext(ActiveUserContext);

     // Get AllReporter Data
     useEffect(() => {
        async function fetchAllReporterData() {
            try {
                const reportrData = { month: currentDate.getMonth()+1, year: currentDate.getFullYear() };
                const reporters = await server(activeUser, reportrData, "GetAllReporters");
                setEmployees(reporters.data);
                setReload(false);
            } catch {
                console.error("No reports")
            }
        }

        // fetchPerimeterData();
        if (activeUser) {
            fetchAllReporterData();
        }
    }, [activeUser, currentDate, reload]);


    async function changeEmployeesReportsStatus(params){
        const ans = await server(activeUser,{status: params.approval,checkdate2: true,reportids :params.reportIds},"SetReportApproval");
        setReload(true);
    }

    const onDateSelection = (currentDate) => {
        setSelectAllReports(false);
        setCurrentDate(currentDate);
    }

    const onSearch = (input) => {
       setInputTextForSearch(input);
    }
     

    if (!activeUser) {
        return <Redirect to='/' />
    }
    const employeesFilterd = inputTextForSearch !== "" ? employees.filter(employee => (employee.firstname + " " + employee.lastname).includes(inputTextForSearch)) : employees;
    const cards = employeesFilterd && employeesFilterd.length > 0 ? employeesFilterd.map((employee, index) => {
        return (
            <Card className="employee-card" key={employee.userid}>
                <Card.Header>
                    <EmployHoursApproveHeader employee={employee} index={index+1} openRow={index+1 === activeKey} setActiveKey={setActiveKey} input={inputTextForSearch} />
                </Card.Header>
                <Accordion.Collapse eventKey={index+1} >
                    <EmployHoursApproveBody employee={employee} changeEmployeesReportsStatus={changeEmployeesReportsStatus} employeeIndex={index} selectAllReports={selectAllReports} setSelectAllReports={setSelectAllReports} />
                </Accordion.Collapse>
            </Card>
        )
    }) : null;

    return (
        <div className="p-hours-approve">
            <PortalNavbar handleLogout={handleLogout} title="אישור שעות"/>
            <PortalDatePicker type={'Month'} onDateSelection={onDateSelection}/>
            <PortalSearchPager placeholder="חיפוש עובד" onSearch={onSearch}/>
            <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                {cards ? cards : null}
            </Accordion>
            <HoursReportFooter save={true}
                copy={false}
                add={true}
                del={false}
                back={true}/>
        </div>
    );
}

export default HoursApprovePage;