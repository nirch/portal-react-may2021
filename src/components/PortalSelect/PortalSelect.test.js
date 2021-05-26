import { render , screen} from '@testing-library/react';
import PortalSelect from './PortalSelect'; 


it('check title', () => {

    let title = "בדיקה"; 
    let optionsKey = "שם העיר"; 
    let options=[
        {"value": "TelAviv", "name": "תל אביב"},
        {"value": "RamatGan", "name":"רמת גן"},
        {"value": "Jerusalem", "name":"ירושלים"}
    ]; 

    function getPortalSelectedValue(selectedValue){
        console.log(selectedValue); 
    }

    
     render(   <PortalSelect 
        title={title}
        optionsKey={optionsKey}
        options = {options}
        handleSelection= {getPortalSelectedValue}
    ></PortalSelect>); 

    const tTitle = screen.getByText(/בדיקה/); 
    
    expect(tTitle).toBeInTheDocument(); 
});
 