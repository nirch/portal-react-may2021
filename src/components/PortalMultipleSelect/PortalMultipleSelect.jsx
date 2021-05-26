import { useEffect, useState } from "react";
import "./PortalMultipleSelect.css";

const PortalMultipleSelect = ({title, options, optionKey, handleSelection}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [viewSelect, setViewSelect] = useState(false);
    let optionsForSelect =  options.filter( el => selectedOptions.includes(el) ? false : true);
    console.log(options);
    console.log(optionsForSelect);
    const idSelect = 'select';

    const addElement =(value) => {
        console.log("addElement");
        console.log("value");
        console.log(value);
        setSelectedOptions(selectedOptions.concat(value));
        setViewSelect(false);
    }
    const delElement =(value) => {
        console.log("selectedOptions - delete");
        console.log(selectedOptions);
        let temp = [...selectedOptions];
        temp.splice(selectedOptions.indexOf(value),1)
        setSelectedOptions(temp);
    }
    console.log("selectedOptions - delete");
    console.log(selectedOptions);

    return(
        <div className='multiselect'>
            
            <div className='label'>{title}</div>
            <div className = 'input'>
                <div className='plus' onClick={() => {setViewSelect(true)}}>+</div>
                <div className='selected-options'>{selectedOptions.map((element) =>
                <div className = 'selected-element'> 
                    <div className='name'>
                        {element}
                    </div>
                    <div className='minus' onClick={() => delElement(element) }>&times;</div> 
                </div>)}</div>
            </div>
            {/* <div className={`list-options ${viewSelect ? 'open' : ''}`}>{optionsForSelect.map( (element) => <div onClick={() => addElement(element)} >{element}</div> )}</div> */}
            <div className={`wrap${viewSelect ? '-open' : ''}`} onClick={() => setViewSelect(false)} >
            </div>
            <select className={`list-options ${viewSelect ? 'open' : ''}`} multiple id={idSelect}>{optionsForSelect.map( (element) => <option onClick={() => addElement(element)} value={element}>{element}</option> ) }</select>
        </div>
    );
}

export default PortalMultipleSelect;