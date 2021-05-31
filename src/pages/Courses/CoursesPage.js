import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalSearchPager from '../../components/SearchPager/PortalSearchPage'
import PortalButtonSet from '../../components/PortalButtonSet/PortalButtonSet'
import PortalTable from '../../components/PortalTable/PortalTable'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import AlertComponent from '../../components/alert/Alert';


import server from '../../shared/server'


const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const [courses, setCourses] = useState(null);
    const [pages, setPages] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [search, setSearch] = useState('');
    const [id, setId] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [alertVisibility, setAlertVisibility] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    let data={search: search, sorting: "courseid", desc: false, coursestatus: activeButton ? 0 : 1, page :  activePage}; 
    
    useEffect(() => {
        async function getCourses() {
            try {
                setSpinner(true);
                const response = await server(activeUser, data, "SearchCourses");
                if (response.data.error) { 
                    setSpinner(false);
                    console.error(response.data.error);    
                    // alert("error in get Courses");
                    setAlertMessage(response.data.error);
                    setAlertVisibility("show");
                    return;
                } else {
                    console.log(response.data);  
                    setPages(response.data.pages) ;
                    setCourses( response.data.courses);   
                     setSpinner(false);           
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
            <PortalNavbar handleLogout={handleLogout} title={"קורסים"} />
            {spinner ? <Spinner animation="border" role="status" />   : null}
            <AlertComponent text={alertMessage} type="error" onClose={() => setAlertVisibility("hide") } visibility={alertVisibility}/> 
            {!spinner ? <PortalSearchPager placeholder={"חיפוש קורס"} onSearch={(search) => { setActivePage(0); setSearch(search); }} pages={pages} currentPage={activePage} onPageChange={setActivePage}/>  : null}        
            {courses ? <PortalTable data={courses} headers={headers}  onClick={click}/>   : null}
            <PortalButtonSet labels={[" קורסים פעילים", "קורסים לא פעילים"]} activeButton={activeButton} changeActiveBtn={setActiveButton}  border ="top"/>   
        </div>
       
    );
}

export default CoursesPage;

//text, type, onClose ,visibility