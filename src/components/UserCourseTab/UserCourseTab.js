import React, { useContext, useEffect, useState } from 'react';
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext';
import PortalSearchPager from '../SearchPager/PortalSearchPage';
import { Redirect, useParams} from 'react-router';
import PortalTable from '../PortalTable/PortalTable';
import './UserCourseTab.css';

function UserCourseTab() {
    const activeUser = useContext(ActiveUserContext);
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState("")
    const [enrolledAsTeacher, setEnrolledAsTeacher] = useState([]) ;
    const [enrolledAsStudent, setEnrolledAsStudent] = useState([]) ;  
    const [pages, setPages] = useState(0);
    const [path, setPath] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const { id } = useParams();
    const roles= [1,2];

    useEffect(() => {       
        if(activeUser && id){
            getAllCourses();   
        }
    }, [activeUser,id, searchText, currentPage]);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    if(path){
        return <Redirect to={path}/>
    }

    async function getAllCourses(){
        const data = {userId: id, search:searchText, page:currentPage}
        let tempCourseArr = [];
        let pages = 0;
        for (let i=0; i<roles.length;i++){
            data.roleid = roles[i];
            const coursesResult = await server(activeUser, data, "GetCoursesWithUserEnrolledAsRole");
            //prepare the data srtucture for future use as old portal uses this.
            const enrolled = coursesResult.data.enrolled;
            if(roles[i]===1){
                setEnrolledAsTeacher(enrolled);
            }else if(roles[i]===2){
                setEnrolledAsStudent(enrolled);
            }
            tempCourseArr = tempCourseArr.concat(enrolled)
            pages = Math.max(pages, coursesResult.data.pages);
        } 
        setPages(pages);
        setCourses(tempCourseArr);
    }  

    const headers= [
        {key: "coursename", header: "קורס"},
        {key: "projectname", header: "פרויקט"}, 
    ];

    function onPageChange(data){
        setCurrentPage(data);
    }

    function onRowClick(data){
        setPath(`/courses/${data.courseid}`);      
    }

    function onSearch(searchText){
        setSearchText(searchText);
        const tempArr = [];
        setCourses(tempArr);
    }

    return (
        <>
            {courses && courses.length>0 ?
                <div className="c-user-course-tab">
                    <PortalSearchPager placeholder="חיפוש קורס"
                                        onSearch={onSearch}
                                        pages={pages}
                                        currentPage={currentPage}
                                        onPageChange={onPageChange}/> 
                    <PortalTable headers={headers} 
                                data={courses} 
                                onClick={onRowClick}/>
                </div>
            :null
            }
        </>
    )
}

export default UserCourseTab;