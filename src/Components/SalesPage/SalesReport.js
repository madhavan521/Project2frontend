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

const SaleReport = () => {  
  // Data provided  
  const rawData = [  
    { month: "January", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.01838 + 11.04362) / 2 },  
    { month: "December", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.03443 + 1.06264) / 2 },  
    { month: "November", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.03399 + 1.09334) / 2 },  
    { month: "October", totalSales: Math.random() * 1000 + 500,  total: Math.random() * 300 + 500,averagePrice: (1.07626 + 1.10822) / 2 },  
    { month: "September", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.10028 + 1.12124) / 2 },  
    { month: "August", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.0783 + 1.12011) / 2 },  
    { month: "July", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.07106 + 1.09472) / 2 },  
    { month: "June", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.06677 + 1.09182) / 2 },  
    { month: "May", totalSales: Math.random() * 1000 + 500,  total: Math.random() * 300 + 500,averagePrice: (1.06758 + 1.08968) / 2 },  
    { month: "April", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.06041 + 1.08885) / 2 },  
    { month: "March", totalSales: Math.random() * 1000 + 500, total: Math.random() * 300 + 500, averagePrice: (1.07316 + 1.0978) / 2 },  
    { month: "February", totalSales: Math.random() * 1000 + 500, averagePrice: (1.06955 + 1.0898) / 2 },  
    { month: "Jan", totalSales: Math.random() * 1000 + 500, averagePrice: (1.06955 + 1.0898) / 2 },  
];  

  const chartData = {  
    labels: rawData.map((item) => item.month), 
    datasets: [  
      {  
        label: 'Total Sales',  
        data: rawData.map((item) => item.totalSales),  
        borderColor: 'red',  
        borderWidth: 2,  
        pointRadius: 3,  
        fill: false,  
      },  
      {  
        label: 'Average Price',  
        data: rawData.map((item) => item.total),  
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
          text: 'Month', // Updated label to reflect that it's months  
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
    <div  className='card ms-2' >  
      <h2 className='text-center my-1' style={{color:"#4B50A3"}}>Average Price and Total Sales Line Chart</h2>  
      <Line data={chartData} options={options} />  
    </div>  
  );  
};  

export default SaleReport;