import React from 'react';
import { useState } from 'react';

export default function FormComp({ addData }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        addData(formData); // Pass data up to the parent component
        setFormData({ name: '', email: '' }); // Clear form fields
      };
    
      const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: '20px auto',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      };
    
      const inputStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px',
      };
    
      const buttonStyle = {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      };
    
      return (
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Add to Table
          </button>
        </form>
      );
};