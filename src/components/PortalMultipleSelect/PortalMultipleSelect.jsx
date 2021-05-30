import { useEffect, useState } from "react";
import "./PortalMultipleSelect.scss";

const PortalMultipleSelect = ({title, options, optionKey, handleSelection}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [viewSelect, setViewSelect] = useState(false);
    let optionsForSelect =  options.filter( el => !selectedOptions.includes(el));
    // let optionsForSelect =  options.filter( el => selectedOptions.find(elSelected => elSelected[optionKey] === el[optionKey]) ? false : true);

    const idSelect = 'select';

    const addElement =(value) => {
        const ret = selectedOptions.concat(value);
        handleSelection(ret,value, true);
        setSelectedOptions(ret);
        setViewSelect(false);
    }
    const delElement =(value) => {

        
        let temp = [...selectedOptions];
        temp.splice(selectedOptions.indexOf(value),1)
        handleSelection(temp,value, false);
        setSelectedOptions(temp);
    }

    return(
        <div className='multiselect'>
            
            <div className='label'>{title}</div>
            <div className = 'input'>
                <div className='plus' onClick={() => {setViewSelect(true)}}>+</div>
                <div className='selected-options'>{selectedOptions.map((element) =>
                <div className = 'selected-element'> 
                    <div className='name'>
                        {element[optionKey]}
                    </div>
                    <div className='minus' onClick={() => delElement(element) }>&times;</div> 
                </div>)}</div>
            </div>
            <div className={`wrap${viewSelect ? '-open' : ''}`} onClick={() => setViewSelect(false)} >
            </div>
            <select className={`list-options ${viewSelect ? 'open' : ''}`} multiple id={idSelect}>{optionsForSelect.map( (element) => <option key={element[optionKey]} onClick={() => addElement(element)} value={element[optionKey]}>{element[optionKey]}</option> ) }</select>
        </div>
    );
}

export default PortalMultipleSelect;