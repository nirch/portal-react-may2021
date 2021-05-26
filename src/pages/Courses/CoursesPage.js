import React, { useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-courses">
            {/* <PortalNavbar handleLogout={handleLogout} title='קורסים' funcBack={() => {alert("I'm clicked")}} debug/> */}
            <PortalNavbar handleLogout={handleLogout} title='קורסים' debug/>
            <h1>קורסים</h1>
        </div>
    );
}

export default CoursesPage;