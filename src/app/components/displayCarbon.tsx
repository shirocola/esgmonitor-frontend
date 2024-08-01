"use client";

import { useEffect, useState } from 'react';
import apiClient from '../services/apiClient';
import AddCarbonFootprint from '../services/addCarbonFootprint';

const CarbonFootprintPage = () => {
  const [data, setData] = useState<{ name: string; value: number; unit: string; date: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiClient.get('/carbon-footprint');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Carbon Footprint Data</h1>
      {error && <p>{error}</p>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value} {item.unit} on {new Date(item.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <AddCarbonFootprint />
    </div>
  );
};

export default CarbonFootprintPage;