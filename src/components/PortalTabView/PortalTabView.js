import React, { useEffect, useState } from 'react'
import './PortalTabView.css'

export default function PortalTabView({tabs}) {

    const [tabIndex, setTabIndex] = useState(0);

    //return current tab to parent
    useEffect(()=> {
        if( tabs[tabIndex].onChange ) {
            tabs[tabIndex].onChange(tabIndex);
        } 
    },[tabIndex])

    const style = {width:100/tabs.length + "%" }
        
    const tabHeader = tabs.map((tab,index) => 
                <a className={tabIndex === index ? "active" : null} 
                    onClick={(e) => setTabIndex(index)}
                    style={style}>{tab.header}</a>);
    

    return (
    <div>
        <div>
            <nav>
                <div className="c-tabs">
                    {tabHeader}                   
                </div>
            </nav>
            <div>           
                <div>{tabs[tabIndex].view}</div>
            </div>    
        </div>
    </div>
    )
}
