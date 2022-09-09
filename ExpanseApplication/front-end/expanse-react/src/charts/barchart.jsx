import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Income',
                backgroundColor: '#42A5F5',
                data: [1190, 1359, 1280, 1281, 1356, 1355, 1740]
            },
            {
                label: 'Expenses',
                backgroundColor: '#FFA726',
                data: [928, 948, 840, 919, 1186, 1227, 990]
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
        }
    }

    const { basicOptions} = getLightTheme();

    return (
        <div className='card card_title_activity'>
            <h5>Analytics</h5>
            <Chart type="bar" data={basicData} options={basicOptions} style={{ position: 'relative', height: '280px' }}/>
        </div>
    )
}

export default BarChart;