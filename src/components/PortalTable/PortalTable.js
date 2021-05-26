
import React, { useState, useContext } from 'react';
import './PortalTable.css'
import server from '../../shared/server'
import ActiveUserContext from '../../shared/activeUserContext'


function PortalTableRow ({row, keys, onClickRow}) { 
   
    function RowClick(){
        onClickRow(row);
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
  
 
const PortalTable = ({headers, data, onClick}) => {
    
    function clickRow(row){
        onClick(row);
    }
    const   heads = headers.map((header, index) => <th key={index} className="thead_th">{header.header }</th>);
    const    keys = headers.map(header => header.key);
    const rows = data.map(newrow =><PortalTableRow  row={newrow} keys={keys} onClickRow={clickRow}/> )
  
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