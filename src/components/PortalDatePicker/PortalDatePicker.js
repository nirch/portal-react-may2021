import React, { useEffect, useState } from 'react'
import PortalPager from '../Pager/ProtalPager';
import './PortalDatePicker.css';

const PortalDatePicker = (props) => {
    const { type } = props;
    const { onDateSelection } = props;

    const today= new Date();
    const [currentDate, setCurrentDate] = useState(today);

    useEffect(() => {
        if(currentDate!==today){
            onDateSelection(currentDate);
        }
    }, [currentDate])

    const monthMap={1:"ינואר",
                    2:"פברואר",
                    3:"מרץ",
                    4:"אפריל",
                    5:"מאי",
                    6:"יוני",
                    7:"יולי",
                    8:"אוגוסט",
                    9:"ספטמבר",
                    10:"אוקטובר",
                    11:"נובמבר",
                    12:"דצמבר"}
    
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
        
    let monthName="";
    let dayName="";

    let nextMonth= month+1;
    let prevMonth= month-1;
    if(type==='Month'){    
        if(month===12){
            nextMonth=1;
        }   
        if(month===1){
            prevMonth=12;
        }
        const diffMonth = monthDiff(currentDate , today); 
        if(currentDate>today && diffMonth>=6){
            nextMonth="";
        }
        if(currentDate<today && diffMonth>=6){
            prevMonth="";
        }
        monthName = monthMap[month] +" "+year;
        
    }else if(type==='Day'){
        year = year%100;
        dayName= date+"/"+month+"/"+year;
    }

    function monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        months = Math.abs(months);
        return months=== 0 ? 0 : months;
    }

    function onPageChange(action){
        if(action==="prev"){
            if(type==='Day'){
                const prevDay = new Date(currentDate);
                prevDay.setDate(prevDay.getDate()-1);
                setCurrentDate(prevDay)
            }
            if(type==='Month'){
                const prevMonth = new Date(currentDate);
                prevMonth.setDate(1);
                prevMonth.setMonth(prevMonth.getMonth()-1);
                setCurrentDate(prevMonth);
            }  
        }
        else if(action==="next"){
            if(type==='Day'){
                const nextDay = new Date(currentDate);
                nextDay.setDate(nextDay.getDate()+1);
                setCurrentDate(nextDay)
            }
            if(type==='Month'){
                const nextMonth = new Date(currentDate);
                nextMonth.setDate(1);
                nextMonth.setMonth(nextMonth.getMonth()+1);
                setCurrentDate(nextMonth);
            }        
        }
    }
    return(
        <div className="c-date-picker">
            <PortalPager className="c-date-pager"
                         curr={monthName? monthName:dayName} 
                         prev={monthName? prevMonth:dayName}
                         next={monthName? nextMonth:dayName}
                         type= {type}
                         onPageClick={(action)=>onPageChange(action)}  />
        </div>
    )

}
export default PortalDatePicker