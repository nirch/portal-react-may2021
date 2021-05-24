import React, { useContext, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'
import './header.css'
import './sidebar.css'

import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router';

//props:
// isSandwich - if false, than output >, if true - sandwich
// title - title of navbar
const PortalNavbar = (props) => {

    const { handleLogout, isSandwich, title } = props;
    const activeUser = useContext(ActiveUserContext);
    const [menuOpen, setIMenuOpen] = useState(false);
    //need to do make check current page - if yes, disable menu element
    const imgsDomain = 'https://pil1.appleseeds.org.il/dcnir/data/images/';
    const changePage = (newPage) => {
        return <Redirect to={newPage} />
    }

    return (
        <div className="c-navbar">
            <div className="header-wrap">
                <div className="header-title">
                    {title}
                </div>
                <div onClick={() => setIMenuOpen(true)} className="pencil-icon-wrap">
                    <div className="pencil-icon"></div>
                </div>
            </div>
            <div className={menuOpen ? 'sidebar-open' : ''}>
                <div className="sidebar-background" onClick={() => setIMenuOpen(false)}></div>
                <div className="sidebar-wrap" >
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <img className="appleseeds-logo" src="img/bg_logo.png"></img>
                        </div>
                        <div className="profile-preview">
                            <img className="profile-image" ng-src={activeUser.image && activeUser.image != '' ? imgsDomain + activeUser.image : 'img/profile.svg'}></img>
                            <div className="name-wrap">
                                <span className="user-name">
                                    {`${activeUser.firstname} ${activeUser.lastname}`}
                                </span>
                            </div>
                        </div>
                        <div className="sidebar-options">
                            <div className="menu-information" onClick={() => changePage("users")}>
                                משתמשים
                        </div>
                            <div className="menu-information" onClick={() => changePage("courses")}>
                                קורסים
                        </div>
                            <div className="menu-information" onClick={() => changePage("report")}>
                                קווחים שעות
                        </div>
                            <div className="menu-information" onClick={() => changePage("approve")}>
                                אישור שעות
                        </div>
                            <div className="menu-information" onClick={() => changePage("logout")}>
                                התנתקות
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortalNavbar;