"use client";

import { useState } from 'react';
import apiClient from './apiClient';

const AddCarbonFootprint = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState<number | ''>('');
  const [unit, setUnit] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await apiClient.post('/carbon-footprint', { name, value: Number(value), unit, date });
      // Optionally refresh the data or clear the form
      setName('');
      setValue('');
      setUnit('');
      setDate('');
      console.log('Data added successfully');
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
        required
      />
      <input 
        type="number" 
        placeholder="Value" 
        value={value} 
        onChange={(e) => setValue(Number(e.target.value))} 
        required
      />
      <input 
        type="text" 
        placeholder="Unit" 
        value={unit} 
        onChange={(e) => setUnit(e.target.value)} 
        required
      />
      <input 
        type="date" 
        placeholder="Date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCarbonFootprint;