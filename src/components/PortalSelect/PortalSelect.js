/**
 * 
 * Props:
     title. string.
     options. array of objects.
     handleSelection. callback function. sends the object of the selected option.

    @returns: select box with options
 */

import './PortalSelect.css';

function PortalSelect({title, options, onChange , value}){

    function localHandleSelection(e){
        let selectedVal = ""; 
        selectedVal = e.target.value;
        onChange(selectedVal ); 
    }

    return (
        <div className="c-portalSelect">
           <span className="c-portalSelect-title">{title}</span>
          
                <select    value={value} 
                        onChange={localHandleSelection}>

                  {
                        Array.isArray(options)  ? 
                          options.map((option) => (
                            <option key={option.value}  
                                    value={option.value}  >
                                {option.name}
                            </option>
                          ))
                  :null
                    }
                </select>
        </div>
    )
}

export default PortalSelect; 

 