"use client";

import { useEffect, useState } from 'react';
import apiClient from './apiClient';

const CarbonFootprintPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiClient.get('/carbon-footprint')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Carbon Footprint Data</h1>
      <ul>
        {data.map((item: any) => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarbonFootprintPage;
