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
            <PortalMultipleSelect title="text title" options={['111 111 111', '22222 222 22', '333 333 333', '4444444', '5345345345', '646656456', '567567567', '678678678' ]}
            handleSelection ={(options, option, isAdded) => {
                
                console.log("options:");
                console.log(options);

                console.log("option: ");
                console.log(option);

                console.log("isAdded: ");
                console.log(isAdded);

                } } />
        </div>
    );
}

export default CoursesPage;