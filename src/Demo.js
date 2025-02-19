import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Demo = () => {
  // Data provided
  const rawData = [
    { date: "2025-01-22", low: 1.01838, high: 1.04362 },
    { date: "2024-12-30", low: 1.03443, high: 1.06264 },
    { date: "2024-11-28", low: 1.03399, high: 1.09334 },
    { date: "2024-10-31", low: 1.07626, high: 1.10822 },
    { date: "2024-09-30", low: 1.10028, high: 1.12124 },
    { date: "2024-08-29", low: 1.0783, high: 1.12011 },
    { date: "2024-07-31", low: 1.07106, high: 1.09472 },
    { date: "2024-06-30", low: 1.06677, high: 1.09182 },
    { date: "2024-05-30", low: 1.06758, high: 1.08968 },
    { date: "2024-04-30", low: 1.06041, high: 1.08885 },
    { date: "2024-03-31", low: 1.07316, high: 1.0978 },
    { date: "2024-02-29", low: 1.06955, high: 1.0898 },
    { date: "2024-01-31", low: 1.07803, high: 1.10461 },
    { date: "2023-12-31", low: 1.07315, high: 1.11394 },
    { date: "2023-11-30", low: 1.05842, high: 1.10169 },
    { date: "2023-10-31", low: 1.04499, high: 1.06905 },
    { date: "2023-09-28", low: 1.04919, high: 1.08091 },
    { date: "2023-08-31", low: 1.07667, high: 1.10584 },
    { date: "2023-07-31", low: 1.08343, high: 1.12757 },
    { date: "2023-06-29", low: 1.06673, high: 1.10112 },
    { date: "2023-05-31", low: 1.06517, high: 1.10914 },
    { date: "2023-04-30", low: 1.07893, high: 1.10941 },
    { date: "2023-03-30", low: 1.05203, high: 1.0929 },
    { date: "2023-02-28", low: 1.05335, high: 1.10266 },
    { date: "2023-01-31", low: 1.04853, high: 1.09326 },
  ];

  const chartData = {
    labels: rawData.map((item) => item.date), // X-axis labels
    datasets: [
      {
        label: 'High',
        data: rawData.map((item) => item.high),
        borderColor: 'red',
        borderWidth: 2,
        pointRadius: 3,
        fill: false,
      },
      {
        label: 'Low',
        data: rawData.map((item) => item.low),
        borderColor: 'blue',
        borderWidth: 2,
        pointRadius: 3,
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
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
      },
    },
  };

  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <h2>Low and High Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Demo;
