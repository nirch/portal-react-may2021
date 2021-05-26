import React, { useContext } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <div className="header">
                <div>
                    <h1>שם העובד</h1>
                    <h1>שם משפחה</h1>
                    <input type="checkbox" id="change-pwd" name="change-pwd"/>
                    <label for="change-pwd">שינוי סיסמה</label>
                    <p>נרשם ב: <span className="date-created">2018-05-08 15:36:22</span></p>
                </div>
                <div>
                    <div className="actions-wrapper">
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <div className="image-wrapper">
                        <img className="user-image" src="" alt=""/>
                        <img className="edit-image" src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersPage;