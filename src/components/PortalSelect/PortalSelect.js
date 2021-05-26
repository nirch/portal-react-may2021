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

function PortalSelect({title, optionsKey, options, handleSelection }){

    function localHandleSelection(){
        let selectedVal = ""; 
        selectedVal = document.getElementById("portalSelectId").value;
        handleSelection(selectedVal ); 
    }

    return (
        <div className="c-portalSelect">
           <span className="c-portalSelect-title">{title}</span>
                <select id="portalSelectId"   
                        onChange={localHandleSelection}>
                    <option key="0" value="">{optionsKey}</option>{
                          Array.isArray(options)  ? 
                          options.map((option) => (
                            <option key={option.value}  value={option.value}>{option.name}</option>
                          ))
                  :null
                    }
                </select>
        </div>
    )
}

export default PortalSelect; 

 