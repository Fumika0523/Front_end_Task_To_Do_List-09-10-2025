import React from 'react';
import {
  Chart as ChartJS,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  PieController,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// register
ChartJS.register(Title, Legend, Tooltip, PieController, ArcElement);

const ChartCard = ({ tasks}) => {
//filter methods to find open/close tasks
  const openTasks = tasks.filter((tasks) => !tasks.completed);
  console.log("OpenTasks",openTasks)
  const closedTasks = tasks.filter((tasks) => tasks.completed);
  console.log("Closed Tasks",closedTasks)

  // Data categorise into 2 statuses
  const data = {
    labels: ['Open', 'Closed'],
    datasets: [
      {
        //  label:'Tasks',
        data: [openTasks.length, closedTasks.length],
        backgroundColor: [  
          'rgb(255, 99, 132)', 'rgb(54, 162, 235)',
        ],
    hoverOffset: 10

      },
    ],
  };

  // Options: tooltip
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Tasks status' },

    },
  };

  return (
    <div >
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartCard;
