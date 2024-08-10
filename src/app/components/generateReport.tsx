'use client';

import { useState } from 'react';
import apiClient from '../services/apiClient';
import axios from 'axios';

const GenerateReport = () => {
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [format, setFormat] = useState<'pdf' | 'excel'>('excel');

  const generateReport = async () => {
    try {
      setIsGenerating(true);
      setError(null);
  
      if (!startDate || !endDate || !format) {
        setError('Please select start date, end date, and format.');
        setIsGenerating(false);
        return;
      }
  
      console.log('Sending request to generate report...');
      console.log('Start Date:', startDate, 'End Date:', endDate, 'Format:', format);
  
      const response = await apiClient.post('/api/carbon-footprint/report', {
          startDate,
          endDate,
          format,
      });
  
      console.log('Received response:', response.data);
  
      if (response.data?.fileUrl) {
        const fileUrl = `${process.env.NEXT_PUBLIC_API_URL}${response.data.fileUrl}`;
        console.log('Downloading report from:', fileUrl);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', `carbon-footprint-report.${format}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError('Failed to generate report: No file URL returned');
        console.error('Failed to generate report: No file URL returned');
      }
  
      setIsGenerating(false);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Unknown error';
        console.error('Error generating report:', errorMessage);
        setError(`Failed to generate report: ${errorMessage}`);
      } else {
        console.error('Unexpected error generating report:', error);
        setError('Failed to generate report due to an unexpected error.');
      }
      setIsGenerating(false);
    }
  };
  
  
  

  return (
    <div>
      <h2>Generate Carbon Footprint Report</h2>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Format:
        <select value={format} onChange={(e) => setFormat(e.target.value as 'pdf' | 'excel')}>
          <option value="excel">Excel</option>
          <option value="pdf">PDF</option>
        </select>
      </label>
      <button onClick={generateReport} disabled={isGenerating}>
        {isGenerating ? 'Generating Report...' : 'Generate Report'}
      </button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default GenerateReport;
