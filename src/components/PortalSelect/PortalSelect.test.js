import { render , screen} from '@testing-library/react';
import PortalSelect from './PortalSelect'; 


it('check title', () => {

    let title = "בדיקה"; 
   
    let options=[
        {"value": "1", "name": "תל אביב"},
        {"value": "2", "name":"רמת גן"},
        {"value": "3", "name":"ירושלים"}
    ]; 
   
    let selectedValue = 2;  //the value that the user chose or an existing  data base value

    function getSelectedValue(selectedValue){ //state handles the change of the value
        console.log(selectedValue); 
    }

    
     render(   <PortalSelect 
        title={title}
        options = {options}
        onChange= {getSelectedValue}
        value = {selectedValue}
    ></PortalSelect>); 

    const tTitle = screen.getByText(/בדיקה/); 
    
    expect(tTitle).toBeInTheDocument(); 
});
 