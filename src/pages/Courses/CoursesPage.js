import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
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
    const [courses, setCourses] = useState(null);
    const [pages, setPages] = useState(null);
    const [activeButton, setActiveButton] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [search, setSearch] = useState(null);
    const [id, setId] = useState(null);
    
  
    let data={search: search, sorting: "courseid", desc: false, coursestatus: activeButton ? 0 : 1, page:activePage}; 
    
    useEffect(() => {
        async function getCourses() {
            try {
                const response = await server(activeUser, data, "SearchCourses");
                if (response.data.error) { 
                    console.error(response.data.error);    
                     alert("error in get Courses");
                } else {
                    console.log(response.data);  
                    setPages(response.data.courses.length-1) ;
                    setCourses( response.data.courses);              
                } 
            } catch (e) {
                console.error(e);
            }
        }
        getCourses()     
    }, [activePage, activeButton, search])


    if (!activeUser) {
        return <Redirect to='/' />
    }
     
    const headers= [
        {key: "subname", header: "שם מקוצר"},
        {key: "project", header: "פרויקט"}, 
        {key: "teachers", header: "מדריך"} 
    ];   
    
    function click(row){
        console.log(row.courseid);
        setId(row.courseid) ;      
    }
    // redirect to course page
    if(id){
        return <Redirect to={`/courses/${id}`} />
    }

    return (    
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            {courses ? <PortalSearchPager placeholder={"חיפוש קורס"}  onSearch={setSearch} pages={pages} currentPage={activePage} onPageChange={setActivePage}/>  : null}        
            {courses ? <PortalTable data={courses} headers={headers}  onClick={click}/>   : null}
            <PortalButtonSet labels={[" קורסים פעילים", "קורסים לא פעילים"]} activeButton={activeButton} changeActiveBtn={setActiveButton}  border ={"bottom"}/>   
        </div>
       
    );
}

export default CoursesPage;