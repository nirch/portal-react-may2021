import React, { useContext, useEffect, useState } from 'react'
import PortalInput from '../PortalInput/PortalInput'
import './CoursePageDetailsTab.css' 
import server from '../../shared/server'
import ActiveUserContext from '../../shared/activeUserContext';
import { useParams } from 'react-router';
import PortalSelect from '../PortalSelect/PortalSelect';
import PortalMultipleSelect from '../PortalMultipleSelect/PortalMultipleSelect';

export default function CoursePageDetailsTab({courseid}) {

    // const courseid = useParams("id");
    const activeUser = useContext(ActiveUserContext);
    const [course,setCourse] = useState("");
    const [project,setProject] = useState([]);
    const [city,setCity] = useState([]);
    const [activeBudgetYear, setActiveBudgetYear] = useState([]);
    const [selectedProject, setSelectedProject] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [tags,setTags] = useState([]);
    const [enrolmentProfile, setEnrolmentProfile] = useState("");

    useEffect(() => {
            const data = {courseid};
            const promise0 = server(activeUser, data, "GetCourseById");
            const promise1 = server(activeUser, data, "GetProjects");
            const promise2 = server(activeUser, data, "GetCities");
            const promise3 =server(activeUser, data, "GetActiveYearsBudget");
            const data1 ={roleid:2 ,courseid:courseid , page:0 , search:""}
            const promise4 = server(activeUser, data1, "GetCourseEnrollmentProfiles");

            Promise.all([promise0,promise1,promise2,promise3,promise4]).then(
                responses =>{
                    const coursebyId = responses[0];
                    setCourse(coursebyId.data);
                    const projects = responses[1];
                    projects.data.map(project =>  {project.value = project.projectid ; project.name = project.projectname});
                    setProject(projects.data);

                    const selectd = projects.data.find(a => coursebyId.data.projectid === a.projectid);
                    setSelectedProject( selectd.projectname);
                    setTags(selectd.projecttags);                   

                    const cities = responses[2]                    
                    setCity(cities.data);
                    const selectedCity = cities.data.find( city => coursebyId.data.cityid === city.cityid)
                    setSelectedCity(selectedCity.cityid);
                    
                    const activeB = responses[3]
                    activeB.data.map(active =>  {active.value = active.year ; active.name = active.year});                    
                    setActiveBudgetYear(activeB.data);
                    
                    const enrollment = responses[4]
                    setEnrolmentProfile(enrollment.data.enrolled[0]);                    
                }
            )
      },[]);
    
     
   
    return (  
        <div className="c-page-details">
            <PortalInput title="שם קורס מלא"                        
                        placeholder="שם קורס מלא"
                        value={course.name}
                       />
            <div className="c-line">               
                <PortalInput title="שם קורס מקוצר בעברית"                        
                    placeholder="שם קורס מקוצר בעברית"
                    value={course.subname}
                />                        
                <PortalInput title="שם קורס מקוצר בערבית"                        
                    placeholder="שם קורס מקוצר בערבית"
                    value={course.subnameinarabic}
                />              
            </div>
           
            <PortalSelect title="פרויקט" options={project} optionsKey={selectedProject}/>
            {/* <PortalMultipleSelect title="תגיות" options={tags}/> */}
           
            <div className="c-line">
                <PortalInput title="תאריך לידה"                        
                    placeholder="00/00/0000"
                    value={enrolmentProfile.birthday}
                />
                <PortalInput title="מספר תעודת זהות"                        
                    placeholder="000000000"
                    value={enrolmentProfile.tznumber}
                />
            </div>
            <div className="c-line">
                <PortalSelect title="עיר" options={city}/>
                <PortalSelect title="שנת תקציב" options={activeBudgetYear}/>
            </div>    
            <div>
                 <PortalInput title="מדריך"                        
                        placeholder="מדריך"
                        value={course.primaryTeacherName}
                       />
            </div>
                      
        </div>
       
    )
}
