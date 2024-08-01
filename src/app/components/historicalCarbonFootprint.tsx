"use client";

import { useState, useEffect, useCallback } from "react";
import apiClient from "../services/apiClient";
import { Line } from "react-chartjs-2";
import styles from '../history/history.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const HistoricalCarbonFootprint = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await apiClient.get("/carbon-footprint/history", {
        params: { startDate, endDate },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
      setError("Error fetching historical data");
    }
  }, [startDate, endDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "startDate") setStartDate(value);
    if (name === "endDate") setEndDate(value);
  };

  const chartData = {
    labels: data.map((entry: any) => new Date(entry.date)),
    datasets: [
      {
        label: "Carbon Footprint",
        data: data.map((entry: any) => entry.value),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time' as const,  // Explicitly define the type
        time: {
          unit: 'day' as const,  // Explicitly define the unit as 'day'
          tooltipFormat: 'MM/dd/yyyy',
          displayFormats: {
            day: 'MM/dd/yyyy',
          },
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.label}: ${tooltipItem.raw} unit`,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <div className={styles.dateInputs}>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            className={styles.dateInput}
            value={startDate}
            onChange={handleDateChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            className={styles.dateInput}
            value={endDate}
            onChange={handleDateChange}
          />
        </label>
      </div>
      <div className={styles.chartContainer}>
        <Line data={chartData} options={chartOptions} height={400} width={800} />
      </div>
    </div>
  );
};

export default HistoricalCarbonFootprint;
