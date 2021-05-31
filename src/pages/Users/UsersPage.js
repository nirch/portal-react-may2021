import React, { useContext, useEffect, useState } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import PortalInput from '../../components/PortalInput/PortalInput';
import PortalTable from '../../components/PortalTable/PortalTable';
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import PortalSearchPager from '../../components/SearchPager/PortalSearchPage';
import PortalButtonSet from '../../components/PortalButtonSet/PortalButtonSet';
import server from '../../shared/server';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';


const UsersPage = (props) => {
    const { handleLogout } = props;
    const [userstatus, setUserstatus] = useState(1);//employee working now (1), don't working (0)
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);//first page by default
    const [countPages, setCountPages] = useState(0);//no pages by  default (because no data)
    const [data, setData] = useState([]);//no pages by  default
    const [currentUser, setCurrentUser] = useState(null);//no changed user
    const [currentApiAddress, setCurrentApiAddress] = useState('');
    const [spinner, setSpinner] = useState(false);

    let history = useHistory();//for go back
    const activeUser = useContext(ActiveUserContext);
    let location = useLocation();

    const variants = {
        employee: { api: 'SearchStaffUnderMe', title: "עובדים" },
        student: { api: 'SearchStudentsUnderMe', title: "חניכים" },
        new: { api: 'SearchNewUsers', title: "משתמשים חדשים" }
    }
    useEffect(() => {
        if (location.pathname.includes("employee")) {
            setCurrentApiAddress('employee');
        } else if (location.pathname.includes("student")) {
            setCurrentApiAddress('student');
        } else if (location.pathname.includes("new")) {
            setCurrentApiAddress('new');
        }
    }, [location]);

    useEffect(() => {
        if (currentApiAddress){
            setSpinner(true);
            server(activeUser, { search, userstatus, page, desc: false, sorting: "userid" }, variants[currentApiAddress].api).then(result => {
                setCountPages(result.data.pages);
                setData(result.data.users);
                setSpinner(false);
            });
        }
    }, [currentApiAddress, search, page, userstatus]);

    if (!activeUser) {
        return <Redirect to='/' />
    }

    //changed user - redirect to user's details
    if (currentUser) {
        return <Redirect to={`/users/${currentUser.userid}`} />
    }

    const header = [
        { key: "firstname", header: 'שם' },
        { key: "lastname", header: 'שם משפחה' },
        { key: "email", header: 'אימייל' }];


    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout} title={currentApiAddress ? variants[currentApiAddress].title : ''} />

            <PortalSearchPager
                placeholder='חיפוש עובד'
                onSearch={(text) => { setPage(0); setSearch(text); }}
                pages={countPages}
                currentPage={page}
                onPageChange={(page) => setPage(page)} />
            <PortalTable headers={header} data={data} onClick={setCurrentUser} />
            {spinner
             ? <Spinner animation="border" role="status" />
             : null}
            <PortalButtonSet
                labels={['עובדים פעילים', 'לא פעילים']}
                changeActiveBtn={(param) => setUserstatus((param + 1) % 2)}
                border="top" />

        </div>
    );
}

export default UsersPage;