import { useEffect, useState } from "react";
import "./PortalMultipleSelect.css";

const PortalMultipleSelect = ({title, options, optionKey, handleSelection}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [viewSelect, setViewSelect] = useState(false);
    let optionsForSelect =  options.filter( el => selectedOptions.includes(el) ? false : true);
    console.log(options);
    console.log(optionsForSelect);

    const addElement =(value) => {
        setSelectedOptions(selectedOptions.concat(value));
        setViewSelect(false);
    }
    const delElement =(value) => {
        setSelectedOptions(selectedOptions.splice(selectOptions.indexOf(value),1));
    }

    return(
        <div className='multiselect'>
            <div className='label'>{title}</div>
            <div>
                <div className='plus' onClick={() => setViewSelect(true)}>+</div>
                <div className='selected-options'>{selectedOptions.map((element) =>
                <> 
                    <div>
                        {element}
                    </div>
                    <div onClick={() => delElement(element) }>-</div> 
                </>)}</div>
            </div>
            <div className={`list-options ${viewSelect ? 'open' : ''}`}>{optionsForSelect.map( (element) => <div onClick={() => addElement(element)} >{element}</div> )}</div>
        </div>
    );
}

export default PortalMultipleSelect;