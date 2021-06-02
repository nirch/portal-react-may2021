
import React, { useState, useContext } from 'react';
import './PortalTable.css'


function PortalTableRow ({ row, keys, onClickRow}) {   
    function rowClick(){
        onClickRow(row);
    }
    let td = [];
    let i=0;
    
    for(let i=0; i<keys.length; i++){
        td.push(<td  className="portaltable-td" key={i}>{row[keys[i]] }</td> )
    }

      return (
        <tr onClick={() => rowClick()} className="portaltable-tr">    
          {td}        
        </tr>
      );
  }
  
 
const PortalTable = ({headers, data, onClick}) => {   
    
    const heads = headers.map((header, index) => <th key={index} className="portaltable-head">{header.header }</th>);
    const keys = headers.map(header => header.key);
    const rows = data.map(newrow =><PortalTableRow  row={newrow} keys={keys} onClickRow={onClick}/> )
  
  return (
      <div>      
        <table className="portaltable">
          <thead>
            <tr className="portaltable-tr">         
              {heads}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );  
}

export default PortalTable;