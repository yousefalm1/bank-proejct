'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale, // Import the TimeScale for dates
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Import the date adapter

ChartJS.register(
  CategoryScale,
  TimeScale, // Register TimeScale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MyLineChart = ({ labels, datasets }) => {
  const data = {
    labels: labels, // Ensure `labels` are date objects or valid date strings
    datasets: [
      {
        label: 'Custom Dataset',
        data: datasets,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',

        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true, // Enable responsive mode
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'time', // Set the x-axis to time scale
        time: {
          unit: 'day', // Adjust the unit (e.g., 'day', 'month', 'year')
          displayFormats: {
            day: 'MMM dd', // Custom format for day (e.g., "Oct 30")
          },
        },
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        min: 10,
      },
    },
  };

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default MyLineChart;
