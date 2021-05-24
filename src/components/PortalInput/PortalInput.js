import React from 'react'
import './PortalInput.css'

export default function PortalInput({title, value, placeholder, onHandleChange}) {
    return (
        <div className="c-portalInput">
            <label>{title}</label>
            <input  type="text" placeholder={placeholder}
                    value={value}  
                    onChange={e => onHandleChange(e.target.value)}/>            
        </div>
    )
}
