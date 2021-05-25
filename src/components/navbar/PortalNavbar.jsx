import React, { useContext, useEffect, useState } from 'react';
import './PortalNavbar.css'
import './sidebar.css'

import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router';
import server from '../../shared/server';
import logo from '../../assets/images/logo.svg';
import imgArrow from '../../assets/images/navbar/arrow_down.svg';
import imgUsers from '../../assets/images/navbar/noun_user_user_1064877.svg';
import imgCourses from '../../assets/images/navbar/noun_book_2349054.svg';
import imgReport from '../../assets/images/navbar/noun_time_1610737.svg';
import imgTime from '../../assets/images/navbar/noun_check_box_38652.svg';
import imgOff from '../../assets/images/navbar/noun_off_1915997.svg';

const Sandwich = ({ isSandwich }) => {
    return isSandwich
        ? <div className="sandwich">
            <div className="black" />
            <div />
            <div className="black" />
            <div />
            <div className="black" />
        </div>
        : <div className="sandwich"><div className="black">→</div></div>
}

const MenuItem = ({ image, text, isWithSubmenu, page, func, children, isSubMenu }) => {
    const [openSub, setOpenSub] = useState(false);
    return (
        <>
            <div className={`menu-item ${isSubMenu ? 'sub' : ''} ${openSub ? 'open' : ''} `} onClick={isWithSubmenu ? () => setOpenSub(!openSub) : () => func(page)}>
                <div>
                    <img src={image} alt='icon' />
                </div>
                <div className="text">{text}</div>
                {isWithSubmenu ? <div><img alt='arrow' src={imgArrow} /></div> : null}
            </div>
            <div className={`children ${openSub ? 'open' : ''}`}>{children}</div>
        </>
    );
}

//props:
// isSandwich - if false, than output >, if true - sandwich
// title - title of navbar
//debug - if true then black border 
const PortalNavbar = (props) => {

    const { isSandwich, title, debug } = props;
    const activeUser = useContext(ActiveUserContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [userData, setUserData] = useState({ firstName: '', lastName: '', image: '' });
    const [changePage, setChangePage] = useState('');
    //need to do make check current page - if yes, disable menu element
    const imgsDomain = 'https://pil1.appleseeds.org.il/dcnir/';

    //get data from server about user. 
    useEffect(() =>
        server(activeUser, {}, 'GetMyProfile').then(result => {
            console.log(result);
            setUserData(
                {
                    firstName: result.data.firstname,
                    lastName: result.data.lastname,
                    image: result.data.image
                }
            );
        }
        ), [activeUser]);

    if (changePage) {
        return (<Redirect to={changePage} />);
    }

    return (
        <div className="c-navbar">
            <div className={`header-wrap ${debug ? 'debug' : ''}`} onClick={() => setMenuOpen(true)}>
                <Sandwich isSandwich={isSandwich} />
                <div className="header-title">
                    {title}
                </div>
            </div>
            <div className={menuOpen ? 'sidebar-open' : ''}>
                <div className="sidebar-background" onClick={() => setMenuOpen(false)}></div>
                <div className="sidebar-wrap" >
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <div className="cross" ><i onClick={() => setMenuOpen(false)} className="fas fa-times"></i></div>
                            <img className="appleseeds-logo" src={logo} alt='logo'></img>
                        </div>
                        <div className="profile-preview">
                            <img className="profile-image"  alt='profile' src={userData.image ? imgsDomain + userData.image : 'img/profile.svg'}></img>
                            <div className="name-wrap">
                                <span className="user-name">
                                    {`${userData.firstName} ${userData.lastName}`}
                                </span>
                            </div>
                        </div>
                        <div className="sidebar-options">
                            <MenuItem image={imgUsers} text="משתמשים" isWithSubmenu>
                                <MenuItem text="עובדים" page="abcd" func={setChangePage} isSubMenu />
                                <MenuItem text="חניכים" page="qwerty" func={setChangePage} isSubMenu />
                                <MenuItem text="משתמשים חדשים" page="asdf" func={setChangePage} isSubMenu />
                            </MenuItem>
                            <MenuItem image={imgCourses} text="קורסים" page="courses" func={setChangePage} />
                            <MenuItem image={imgReport} text="דיווח שעות" page="report" func={setChangePage} />
                            <MenuItem image={imgTime} text="אישור שעות" page="approve" func={setChangePage} />
                            <MenuItem image={imgOff} text="התנתקות" page="logout" func={setChangePage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortalNavbar;