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

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const [employees, setEmployees] = useState();
    const [activeKey, setActiveKey] = useState(0);
    const activeUser = useContext(ActiveUserContext);


    useEffect(() => {
        const pathPre = process.env.PUBLIC_URL;
        axios.get(pathPre.concat("/mokdata.json")).then( response => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const changeEmployees = (params) =>{
        const cloneEmployees = [...employees];
            for(const reportIndex of params.reportIndexs){
                cloneEmployees[params.employeeIndex].reports[reportIndex].approval = params.approval;
            }
        setEmployees(cloneEmployees);
    }
    
    const onDateSelection = (currentDate) => {

    }
     

    if (!activeUser) {
        return <Redirect to='/' />
    }

    const cards = employees ?  employees.map((employee, index) => {
        return (
            <Card className="employee-card" key={employee.userid}>
                <Card.Header>
                    <EmployHoursApproveHeader employee={employee} index={index+1} openRow={index+1 === activeKey} setActiveKey={setActiveKey}/>
                </Card.Header>
                <Accordion.Collapse eventKey={index+1} >
                    <EmployHoursApproveBody employee={employee} changeEmployees={changeEmployees} employeeIndex={index}/>
                </Accordion.Collapse>
            </Card>
        )
    }) : null;

    return (
        <div className="p-hours-approve">
            <PortalNavbar handleLogout={handleLogout} title="אישור שעות"/>
            <PortalDatePicker type={'Month'} onDateSelection={onDateSelection}/>
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