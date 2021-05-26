/**
 * 
 * Props:
     title. string.
     options. array of objects.
     optionsKey. string. Renders the value for this key
     handleSelection. callback function. sends the object of the selected option.

    @returns: select box with options
 */

import './PortalSelect.css';

function PortalSelect(){

    let title = "בדיקה"; 


    return (
        <div className="c-portalSelect">
           <span className="c-portalSelect-title">{title}</span>
                <select>
                <option value="volvo">aaaaaa</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                </select>
        </div>
    )
}

export default PortalSelect; 