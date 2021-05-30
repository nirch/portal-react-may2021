import React, { useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalMultipleSelect from '../../components/PortalMultipleSelect/PortalMultipleSelect';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    const options=[
        {key: 'עובדים מלמדים עובדים', key1:12345},
        {key: 'קורס להכשרה', key1:54321},
        {key: 'קורס לצורך בדיקות נטע', key1:333333},
        {key: 'קורס ניסיון נטלי', key1:333333},
        {key: 'הכשרות תמי', key1:333333},
        {key: 'קסר אלסר נשים קבוצה', key1:333333},
        {key: 'תעסוקה בסיסי פברואר - ת.א', key1:333333}, 
        {key: 'ש.ד.במשפחה + עוצמה דיגיטלית- א', key1:333333} 
        ];

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            <PortalMultipleSelect title="text title" options={options} optionKey="key"
            handleSelection ={(options, option, isAdded) => {
                
                console.log("options:");
                console.log(options);

                console.log("option: ");
                console.log(option);

                console.log("isAdded: ");
                console.log(isAdded);

                } } />
        </div>
    );
}

export default CoursesPage;