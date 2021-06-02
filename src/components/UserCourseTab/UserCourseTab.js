import React, { useContext, useEffect, useState } from 'react';
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext';
import PortalSearchPager from '../SearchPager/PortalSearchPage';
import { Redirect, useParams} from 'react-router';
import PortalTable from '../PortalTable/PortalTable';
import { Spinner } from 'react-bootstrap';
import './UserCourseTab.css';

function UserCourseTab() {
    const activeUser = useContext(ActiveUserContext);
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [roles, setRoles] = useState([]);
    const [pages, setPages] = useState(0);
    const [redirectToCourseId, setRedirectToCourseId] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [spinner, setSpinner] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        async function getEnrollmentRoles(){
            const tempRoles = await server(activeUser,{},"GetEnrollmentRoles");
            setRoles(tempRoles.data.map(x=>x.enrollmentroleid));
        }    
        if (activeUser){
            getEnrollmentRoles();
        }
    }, [])

    useEffect(() => {       
        if(activeUser && id){
            setSpinner(true);
            getAllCourses();   
        }
    }, [activeUser,id, searchText, currentPage, roles]);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    if(redirectToCourseId){
        return <Redirect to={redirectToCourseId}/>
    }

    async function getAllCourses(){
        const data = {userId: id, search:searchText, page:currentPage}
        let tempCourseArr = [];
        let pages = 0;
        const promises =[]
        for (let i=0; i<roles.length;i++){
            data.roleid = roles[i];
            promises.push(server(activeUser, data, "GetCoursesWithUserEnrolledAsRole"));
        } 
        const response = await Promise.all(promises);
        if(response && response.length>0){
            for (let i=0;i<response.length;i++){
                pages = Math.max(pages, response[i].data.pages);
                tempCourseArr = tempCourseArr.concat(response[i].data.enrolled);
            }
            setPages(pages);
            setCourses(tempCourseArr);
        }
        setSpinner(false);
    }  

    const headers= [
        {key: "coursename", header: "קורס"},
        {key: "projectname", header: "פרויקט"}, 
    ];

    function onPageChange(data){
        setCurrentPage(data);
    }

    function onRowClick(data){
        setRedirectToCourseId(`/courses/${data.courseid}`);      
    }

    function onSearch(searchText){
        setSearchText(searchText);
        const tempArr = [];
        setCourses(tempArr);
    }

    return (
        <>
            <div className="c-user-course-tab">
                <PortalSearchPager placeholder="חיפוש קורס"
                                onSearch={onSearch}
                                pages={pages}
                                currentPage={currentPage}
                                onPageChange={onPageChange}/> 
                {spinner ? 
                    <Spinner animation="border" role="status" />
                : null}    
                {courses && courses.length>0 ?
                    <PortalTable headers={headers} 
                                data={courses} 
                                onClick={onRowClick}/>
                                : null
                }
            </div>
        </>
    )
}

export default UserCourseTab;