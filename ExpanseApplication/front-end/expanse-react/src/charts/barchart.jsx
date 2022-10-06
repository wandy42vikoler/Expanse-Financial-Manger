import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

const BarChart = () => {

    axios.defaults.baseURL = 'http://localhost:8080';

    async function getTransactionExpenses() {
        try {
            return await axios.get('/transaction/expenses')
                .then(response => {
                    console.log(response.data)
                    response.data.map(transaction => {
                        transactionExpense.push(transaction.amount)
                        transactionDates.push(transaction.date)
                        return null;
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    async function getTransactionIncomes() {
        try {
            return await axios.get('/transaction/incomes')
                .then(response => {
                    console.log(response.data)
                    response.data.map(transaction => {
                        transactionIncome.push(transaction.amount)
                        transactionDates.push(transaction.date)
                        return null;
                    })
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    getTransactionExpenses();
    getTransactionIncomes();

    const transactionIncome = [];
    const transactionExpense = [];
    const transactionDates = [];

    const test_amount = transactionExpense[0]

    console.log(test_amount)
    console.log(transactionIncome, "incomes_TEST")
    console.log(transactionExpense, "expense_TEST")


    const [basicData] = useState({
        labels: transactionDates,
        datasets: [
            {
                label: 'Income',
                backgroundColor: '#42A5F5',
                data: transactionIncome
            },
            {
                label: 'Expenses',
                backgroundColor: '#FFA726',
                data: transactionExpense
            }
        ]
    }, []);

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
        }

        return {
            basicOptions,
        }
    }


    const { basicOptions } = getLightTheme();

    return (

        <div>
            <Chart type="bar" data={basicData} options={basicOptions} style={{ position: 'relative', height: '250px', width: '530px', display: 'block', boxSizing: 'border-box' }} />
        </div>

    )
}



export default BarChart;
