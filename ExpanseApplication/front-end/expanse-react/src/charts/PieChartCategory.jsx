import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const DoughnutChart = () => {
    const [chartData] = useState({
        labels: ['Groceries', 'Entertainment', 'Education'],
        datasets: [
            {
                data: [30, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });

    return (
        
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '80%' }} />
    )
}

  export default DoughnutChart;


