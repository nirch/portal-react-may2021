import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router';
import ActiveUserContext from '../../shared/activeUserContext';
import server from '../../shared/server';
import PortalTable from '../PortalTable/PortalTable';

function UserEmployeesTab({userId}) {
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);//no changed user
    const activeUser = useContext(ActiveUserContext);

    useEffect(()=>{
        setSpinner(true);
        server(activeUser, {userId}, "GetManagedUsersByUserId").then(result => {
            setData(result.data);
            setSpinner(false);
        });
    }, []);

    if (!activeUser) {
        return <Redirect to='/' />
    }


    //changed user - redirect to user's details
    if (currentUser) {
        return <Redirect to={`/users/${currentUser.userid}`} />
    }

    const header = [
        { key: "name", header: 'שם העובד' }];
    


    return (
        <div className='user-employees-tab'>
            {/* <h1>עובדים</h1> */}
            <PortalTable headers={header} data={data} onClick={setCurrentUser} />
            {spinner
             ? <Spinner animation="border" role="status" />
             : null}
            
        </div>
    );
}

export default UserEmployeesTab;