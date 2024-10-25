import React from 'react';



export default  function  TableComp({data}){
  const tableStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#f2f2f2',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr style={headerStyle}>
          <th style={thTdStyle}>Name</th>
          <th style={thTdStyle}>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td style={thTdStyle} colSpan="2">No data available</td>
          </tr>
        ) : (
          data.map((item, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{item.name}</td>
              <td style={thTdStyle}>{item.email}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

