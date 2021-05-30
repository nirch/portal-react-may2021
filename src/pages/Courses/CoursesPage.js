import React, { useState, useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalSearchPager from '../../components/SearchPager/PortalSearchPage'
import PortalButtonSet from '../../components/PortalButtonSet/PortalButtonSet'
import PortalTable from '../../components/PortalTable/PortalTable'

import server from '../../shared/server'


const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [activeButton, setActiveButton] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [courses, setCourses] = useState('');
  
    if (!activeUser) {
        return <Redirect to='/' />
    }
    // let labels=[{key :activeButton, label : "עובדים פעילים" }, {key: inactiveButton, label:"לא פעילים"}];
   let pages=1;
    


    let data={search: "", sorting: "courseid", desc: false, coursestatus: activeButton, page:activePage}
    server(activeUser, data, "SearchCourses").then(res => {
        if (res.data.error) {     
            alert("error in get Courses");
        } else {
         // setCourses( res.data.courses);
          pages=res.data.pages+1;
        
         
        }
    }, err => {        
        console.error(err);
    })

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalSearchPager placeholder={"חיפוש קורס"}  onSearch={() => {}} pages={pages} currentPage={activePage} onPageChange={setActivePage}/>

            <PortalButtonSet labels={["עובדים פעילים", "לא פעילים"]} activeButton={activeButton} changeActiveBtn={setActiveButton}  border ={"bottom"}/>   
        </div>
    );
}

export default CoursesPage;