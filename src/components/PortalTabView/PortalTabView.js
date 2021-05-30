import React, { useState } from 'react'
import './PortalTabView.css'

export default function PortalTabView({tabs}) {

    const [tabIndex, setTabIndex] = useState(0);
     
    const tabHeader = tabs.map((tab,index) => 
                <a className={tabIndex === index ? "active" : null} onClick={(e) => setTabIndex(index)}>{tab.header}</a>);
    
    return (
    <div className="c-portaltabview">
        <div className="">
            <nav>
                <div className="c-tabs">
                    {tabHeader}                   
                </div>
            </nav>
            <div className="c-tabs-view">           
                <div>{tabs[tabIndex].view}</div>
            </div>    
        </div>
    </div>
    )
}
