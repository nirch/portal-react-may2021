import React, { useContext, useEffect, useState } from 'react';
import './HoursApprovePage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
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
    
    const ChangeEmployees = (employeeIndex, reportIndex, approval) =>{
        const cloneEmployees = [...employees];
        cloneEmployees[employeeIndex].reports[reportIndex].approval = approval;
        setEmployees(cloneEmployees);
    }


    if (!activeUser) {
        return <Redirect to='/' />
    }

    const cards = employees ?  employees.map((employee, index) => {
        return (
            <Card className="employee-card" key={employee.userid}>
                <Card.Header>
                    <EmployHoursApproveHeader employee={employee} index={index+1} openRow={index+1 === activeKey} setActiveKey={setActiveKey} diff={diff}/>
                </Card.Header>
                <Accordion.Collapse eventKey={index+1} >
                    <EmployHoursApproveBody employee={employee} diff={diff} changeEmployees={ChangeEmployees} employeeIndex={index}/>
                </Accordion.Collapse>
            </Card>
        )
    }) : null;

    return (
        <div className="p-hours-approve">
            <PortalNavbar handleLogout={handleLogout} />
            <h1>אישור שעות</h1>
            <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={e => setActiveKey(e)}>
                {cards ? cards : null}
            </Accordion>
        </div>
    );
}

//this function copied from stackoverflow
function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
  
    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
      hours = hours + 24;
  
    // return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    let temp = hours + (minutes / 60);
    return temp;
  }
export default HoursApprovePage;