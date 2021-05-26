import React, { useState } from 'react';
import './PortalButtonSet.css';

function PortalButtonSet({labels, activeButton = 0, onClick}) {

    const [active, setActive] = useState(activeButton);

    return (
        <div className="c-buttonSet">
            {
                labels !== [] ?
                    labels.map(
                        (label, index) => 
                            <button key={index} 
                                    className={(index === active) ? "active" : "inactive"} 
                                    onClick={(e) => {setActive(index); onClick(e.target)}}>
                                {label}
                            </button>
                    ) : ''
            }
        </div>
    );
}

export default PortalButtonSet;