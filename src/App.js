import './App.css';
import TableComp from './components/TableComp';
import FormComp from './components/FormComp';
import React, { useState } from 'react';

export default function App() {
  const [tableData, setTableData] = useState([]);

  const addData = (newData) => {
    setTableData([...tableData, newData]); // Add new data to table
  };

 const dejavu = ()=>{
    alert("Deja Vu")
 };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Form and Table Example</h1>
      <FormComp addData={addData} />
      <TableComp data={tableData} />
      
    </div>
  );
};
