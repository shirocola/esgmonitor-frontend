"use client";

import { useState } from 'react';
import apiClient from './apiClient';

const AddCarbonFootprint = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await apiClient.post('/carbon-footprint', { name, value });
      // Optionally refresh the data or clear the form
      setName('');
      setValue('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Value" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCarbonFootprint;
