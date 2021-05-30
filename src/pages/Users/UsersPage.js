import React, { useContext, useEffect, useState } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect, useLocation } from 'react-router-dom'
import PortalInput from '../../components/PortalInput/PortalInput';
import PortalTable from '../../components/PortalTable/PortalTable';
import PortalTabView from '../../components/PortalTabView/PortalTabView';
import PortalSearchPager from '../../components/SearchPager/PortalSearchPage';

const UsersPage = (props) => {
    const { handleLogout } = props;
    const [currentTab, setCurrentTab] = useState(0);//employee working now (0), don't working (!)
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const activeUser = useContext(ActiveUserContext);
    let location = useLocation();
    useEffect(() => {
        console.log(location);
      }, [location]);
      
    useEffect(()=>{
        console.log(`currentTab - ${currentTab}, searchText - ${searchText}, currentPage - ${currentPage}`)
    },[currentTab, searchText, currentPage])
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    const header =[
        {key: "fname", header: 'שם'},
        {key: "lname", header: 'שם משפחה'},
        {key: "email", header: 'אימייל'}];
    const data =[
        {id: 1, fname: "Nir", lname:"Channes", email: "email@google.com"},
        {id: 1, fname: "Nir1", lname:"Channes1", email: "email@google.com1"},
        {id: 1, fname: "Nir2", lname:"Channes2", email: "email@google.com2"},
        {id: 1, fname: "Nir3", lname:"Channes3", email: "email@google.com3"},
        {id: 1, fname: "Nir4", lname:"Channes4", email: "email@google.com4"},
        {id: 1, fname: "Nir5", lname:"Channes5", email: "email@google.com5"},
        {id: 1, fname: "Nir6", lname:"Channes6", email: "email@google.com6"}];
    
    
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>

            <PortalSearchPager 
                placeholder='חיפוש עובד' 
                onSearch={setSearchText}
                pages={5} 
                currentPage={2} 
                onPageChange={setCurrentPage} />
            <PortalTable headers={header} data={data} onClick={()=>{}} />
            <PortalTabView tabs={[
                {header: 'עובדים פעילים', onChange: setCurrentTab}, 
                {header: 'לא פעילים', onChange:setCurrentTab}]} />

        </div>
    );
}

export default UsersPage;