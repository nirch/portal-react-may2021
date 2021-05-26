import React, { useContext } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import back_arrow from '../../assets/images/back_arrow.svg';
import copy_icon from '../../assets/images/copy_icon.svg';
import save_icon from '../../assets/images/save_icon.svg';
import profile_icon from '../../assets/images/profile_icon.svg';
import edit_icon from '../../assets/images/edit_icon.svg';

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <div className="user-header">
                <div>
                    <h1>שם העובד</h1>
                    <h1>שם משפחה</h1>
                    <input type="checkbox" id="change-pwd" name="change-pwd"/>
                    <label for="change-pwd">שינוי סיסמה</label>
                    <p>נרשם ב: <span className="date-created">2018-05-08 15:36:22</span></p>
                </div>
                <div>
                    <div className="actions-wrapper">
                        <img src={back_arrow} alt=""/>
                        <img src={copy_icon} alt=""/>
                        <img src={save_icon} alt=""/>
                    </div>
                    <div className="image-wrapper">
                        <img className="user-image" src={profile_icon} alt=""/>
                        <div className="edit-wrapper">
                            <img className="edit-icon" src={edit_icon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersPage;