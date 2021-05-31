import React, { useContext, useEffect, useState } from 'react'
import PortalInput from '../PortalInput/PortalInput'
import './CoursePageDetailsTab.css' 
import server from '../../shared/server'
import ActiveUserContext from '../../shared/activeUserContext';

export default function CoursePageDetailsTab({courseid}) {
    const activeUser = useContext(ActiveUserContext);
    const [response,setResponse] = useState("");
    const [project,setProject] = useState([]);
    const [city,setCity] = useState([]);
    const [activeBudgetYear, setActiveBudgetYear] = useState([]);

    useEffect(() => {
            const data = {courseid};
            server(activeUser, data, "GetCourseById").then(res => {                
                setResponse(res.data);
                console.log(res.data);
            })
            server(activeUser, data, "GetProjects").then(res => {                
                setProject(res.data);
                console.log(res.data);
            })
            server(activeUser, data, "GetCities").then(res => {                
                setCity(res.data);
                console.log(res.data);
            })
            server(activeUser, data, "GetActiveYearsBudget").then(res => {                
                setActiveBudgetYear(res.data);
                console.log(res.data);
            })   
      },[]);
    
   
   
    return (
        <div className="c-page-details">
            <PortalInput title="שם קורס מלא"                        
                        placeholder="שם קורס מלא"
                        value={response.name}
                       />
            <div className="c-line">               
                <PortalInput title="שם קורס מקוצר בעברית"                        
                    placeholder="שם קורס מקוצר בעברית"
                    value={response.subname}
                />                        
                <PortalInput title="שם קורס מקוצר בערבית"                        
                    placeholder="שם קורס מקוצר בערבית"
                    value={response.subnameinarabic}
                />              
            </div>
            <div className="c-line">
                <PortalInput title="תאריך לידה"                        
                    placeholder="00/00/0000"
                    // value={}
                />
                <PortalInput title="מספר תעודת זהות"                        
                    placeholder="000000000"
                    value={response.primaryTeacherId}
                />
            </div>
            <div>
                 <PortalInput title="מדריך"                        
                        placeholder="מדריך"
                        value={response.primaryTeacherName}
                       />
            </div>
                      
        </div>
    )
}
