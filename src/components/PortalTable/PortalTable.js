
import React, { useState, useContext } from 'react';
import './PortalTable.css'
import server from '../../shared/server'
import ActiveUserContext from '../../shared/activeUserContext'





function PortalTableRow ({row, keys, onClickRow}) { 
    
    function RowClick(){
        console.log("RowClick")
    }

    let td = [];
     for (var prop in row) {       
       if(keys.includes(prop)){
         td.push(<td  className="tbody-td" key={prop}>{row[prop] }</td> )
       }     
    } 
      return (
        <tr onClick={() => RowClick()} className="tbody-tr">    
          {td}        
        </tr>
      );
  }
  
  
  
  function ProductTable ({data, headers, onClickRow}) {
      const rows = [];  
      const heads =[];
      const keys =[];



      //const heads = headers.map((header, index) => ...);
      //const keys = headers.map(header => header.key);
  

      headers.forEach((header,index) => {  
        heads.push(<th key={header.header } className="thead-th">{header.header }</th> ) 
        keys.push(header.key ) 
      });
       console.log(heads);
      // row = data.map(row =><PortalTableRow  row={row} keys={keys} onClickRow={onClickRow}/> )
       data.map((row) => {  
        rows.push(
          <PortalTableRow  row={row} keys={keys} onClickRow={onClickRow}/>
        );  
      });
  
      return (
        <table className="table">
          <thead>
            <tr className="table-tr">         
              {heads}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
   
  }
   
 
const PortalTable = (props) => {
    const activeUser = useContext(ActiveUserContext);

    //const [headers, setHeaders] = useState("");
   // const [data, setData] = useState("");
function ClickRow(){

}
  const headers= [{key: "fname", header: "שם"}, {key: "lname", header: "שם משפחה"},{key: "email", header: "אימייל"}];
  //const data = [{id: "12212", fname: "Nir", lname: "Channes"}, {id: "2212", fname: "John", lname: "Doe"}];
  const data = [{id: "12212", fname: "שם גודמה", lname: "שם משפחה דוגמה", email: "aaaa123456@appleseeds.org"}, {id: "2212", fname: "שם דוגמה", lname: "שם משפחה דוגמה",email: "aaaa123456@appleseeds.org"}];
    return (
      <div>      
        <ProductTable data={data} headers={headers} onClickRow={ClickRow}/>
      </div>
    );  
}

export default PortalTable;