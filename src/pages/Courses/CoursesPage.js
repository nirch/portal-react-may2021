import React, { useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalMultipleSelect from '../../components/PortalMultipleSelect/PortalMultipleSelect';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            <PortalMultipleSelect title="text title" options={['1', '2', '3']} />
        </div>
    );
}

export default CoursesPage;