import React from 'react';
import { Line } from 'react-chartjs-2';
import {   Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

interface DataPoint {
  x: string;
  y: number;
}

interface DataLineChart {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string,
    pointBorderColor: string,
    pointBorderWidth: number
  }[];
}

export default function LineChart() {
  const data: DataLineChart = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        label: "Data Set 1",
        data: [8, 7.8 ,6 ,8 ,7 ,5 ,6
        //   { x: "May 12", y: 8 },
        //   { x: "May 13", y: 7.9 },
        //   { x: "May 14", y: 4.5 },
        //   { x: "May 15", y: 9.8 },
        //   { x: "May 16", y: 5.6 },
        ],
        backgroundColor: 'transparent',
        borderColor: 'gray',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4

      },
    ],
  };

  const options = {};

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
