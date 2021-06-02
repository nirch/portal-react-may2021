import React, { useContext, useEffect, useState } from 'react';
import server from '../../shared/server';
import ActiveUserContext from '../../shared/activeUserContext';
import PortalTable from '../PortalTable/PortalTable';
import { Spinner } from 'react-bootstrap';
import './UserReportTab.css'; 

function UserReportTab({userProfile}) {
    const activeUser = useContext(ActiveUserContext);
    const [reportsSubject, setReportsSubject] = useState([]);
    const [projects, setProjects] = useState([])
    const [spinner, setSpinner] = useState(false);
    // get All initial data - projects and reports subject
    useEffect(() => {
        async function getData(){
            const promises = []
            promises.push(server(activeUser,{},"GetReportSubjects"));
            promises.push(server(activeUser,{},"GetProjects"));
            const response = await Promise.all(promises);
            setReportsSubject(response[0].data);
            setProjects(response[1].data)
            setSpinner(false);       
        }
        if(activeUser){
            setSpinner(true);
            getData();
        }
    }, [])
    
    const tableData = [];   

    if(userProfile.reportSubjects && userProfile.reportSubjects.length>0 && 
        reportsSubject && reportsSubject.length>0 && projects && projects.length>0){
            for(let i=0;i<userProfile.reportSubjects.length;i++){
                const localReportSubject = userProfile.reportSubjects[i];
                const projectName =  projects.find(x=> x.projectid===localReportSubject.projectid);
                const reportSubject = reportsSubject.find(x=> x.reportsubjectid===localReportSubject.reportsubjectid);
                if(projectName && reportSubject){
                    tableData.push({
                        projectname: projectName.projectname,
                        subject: reportSubject.subject,
                        reportSubjectStatus: localReportSubject.reportSubjectStatus==="1"?"פעיל"
                                            :localReportSubject.reportSubjectStatus==="0"?"לא פעיל":"לא מוגדר"
                    });
                }
            }
            
    }

    const headers= [
        {key: "projectname", header: "פרויקט"}, 
        {key: "subject", header: "נושא"}, 
        {key: "reportSubjectStatus", header: "סטטוס"}, 
        
    ];

    function onRowClick(row){

    }
    return (
        <div className = "c-user-report">
        {spinner? <Spinner animation="border" role="status"/> : null}
        {tableData && tableData.length>0}
            <PortalTable headers={headers} 
                        data={tableData} 
                        onClick={onRowClick}/>
        </div>
    );
}

export default UserReportTab;