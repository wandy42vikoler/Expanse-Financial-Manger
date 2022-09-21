import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'primereact/chart';


const DoughnutChart = () => {

    const [chartData, setChartData] = useState([]);



    useEffect(() => {

        axios.defaults.baseURL = 'http://localhost:8080';

            async function getCategories(){
                try{
                    return await axios.get('/categories/four')
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


