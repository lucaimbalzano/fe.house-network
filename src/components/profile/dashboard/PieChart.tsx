import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const PieChart: React.FC = () => {
  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  const options = {};

  return (
    <div>
      <h1>Pie Chart</h1>
      <Pie className='h-90 w-50' data={pieChartData} options={options} />
    </div>
  );
};

export default PieChart;
