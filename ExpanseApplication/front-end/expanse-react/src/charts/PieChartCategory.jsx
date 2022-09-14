import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'primereact/chart';


const DoughnutChart = () => {

    const [chartData, setChartData] = useState([]);



    useEffect(() => {

        axios.defaults.baseURL = 'http://localhost:8080';

        /*axios.get('/categories')
            .then(response => { 
                console.log('Response', response)
                categories.map(item =>
                    categories.push(item.name)
                )
            })
            .catch(error => {
                console.log(error)
            })

            console.log('cat', categories)*/


            async function getCategories(){
                try{
                    return await axios.get('/categories')
                    .then(response => {
                        response.data.map(title => {
                            categoryTitle.push(title.name)
                            categoryAmounts.push(title.amount)
                            return null;
                        }
                    )})
                }
                catch(err){
                    console.log(err)
                }
            }

            getCategories()

            const categoryTitle = [];


                
        
            const categoryAmounts = [];
            
         

            console.log('Amounts', categoryAmounts)



        const dataForChart = {
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
        };
        setChartData(dataForChart)
    },[])


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


