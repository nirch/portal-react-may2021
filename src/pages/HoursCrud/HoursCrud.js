import React, { useContext, useEffect, useState } from 'react';
import './HoursCrud.css'
import HoursReportFooter from '../../components/HoursReportFooter/HoursReportFooter'

const HoursCrud = (props) => {
 
    return (
        <div className="p-hours-crud">
            <h1>p-hours-crud</h1>
            <HoursReportFooter 
                save={false}
                copy={true}
                add={true}
                del={true}
                back={true}
            />
        </div>
    );
}
export default HoursCrud;