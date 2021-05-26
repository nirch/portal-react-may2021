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
    const [employers, setEmployers] = useState();
    const [activeKey, setActiveKey] = useState(0);
    const activeUser = useContext(ActiveUserContext);

    useEffect(() => {
        const pathPre = process.env.PUBLIC_URL;
        axios.get(pathPre.concat("/mokdata.json")).then( response => {
            setEmployers(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);


    if (!activeUser) {
        return <Redirect to='/' />
    }

    const cards = employers ?  employers.map((employer, index) => {
        return (
            <Card className="employ-card">
                <Card.Header>
                    <EmployHoursApproveHeader employer={employer} index={index+1} close={index+1 === activeKey} setActiveKey={setActiveKey}/>
                </Card.Header>
                <Accordion.Collapse eventKey={index+1} >
                    <EmployHoursApproveBody employer={employer}/>
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

export default HoursApprovePage;