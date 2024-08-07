import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
    datasets: [
      {
        label: 'Activity',
        data: [1000, 2000, 500, 2080, 1890, 2390, 3000, 2000, 2780, 1890, 1090, 1490, 2000, 280, 1090, 2000, 1490],
        backgroundColor: '#718bc9',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: '#444',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          borderColor: '#444',
          color: '#444',
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
