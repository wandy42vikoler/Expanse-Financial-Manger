import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {appStateContext} from '../store'
import { Chart } from 'primereact/chart';


const DoughnutChart = () => {

    const [chartData, setChartData] = useState([]);


    const appState = useContext(appStateContext);

    axios.defaults.baseURL = 'http://localhost:8080';


    useEffect(()=>{
        axios.get('/categories/four')
            .then(response => {
                appState.setState(prevState => {
                    prevState.pieCategories = response.data;
                    return {...prevState};
                })
            })
            .catch(error => console.log(error))
    },[])

    let categoryTitle = [];
    let categoryAmounts = [];


    appState.pieCategories.map(item => categoryTitle.push(item.name));
    appState.pieCategories.map(item => categoryAmounts.push(item.amount));



    useEffect(() => {
            
         

            console.log('Amounts', categoryAmounts)
            console.log("pieCategories", appState.pieCategories)



        const dataForChart = {
            labels: categoryTitle,
            datasets: [
                {
                    data: categoryAmounts,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#367E18"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#367E18"
                    ]
                }]
        };
        setChartData(dataForChart);
    },[appState.pieCategories])


    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '80%' }} />
    )
}

  export default DoughnutChart;


