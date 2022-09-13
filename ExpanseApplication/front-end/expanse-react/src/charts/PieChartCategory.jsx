import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'primereact/chart';


const DoughnutChart = () => {


    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/categories')
            .then(response => { 
                console.log(response)
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    const categoryTitle = categories.map(title => (
        title.name
    ));
    let categoryAmounts = categories.map(title => (
        title.amount
    ));

    const [chartData] = useState({
        labels: categoryTitle,
        datasets: [
            {
                data: categoryAmounts,
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

    console.log('type of data', chartData);

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


