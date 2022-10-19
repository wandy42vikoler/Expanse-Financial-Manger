import "../App.css";
import React, { useContext, useEffect } from "react";
import axios from 'axios';
import { appStateContext } from '../store'


function TotalIncome() {

    const appState = useContext(appStateContext);


    axios.defaults.baseURL = 'http://localhost:8080';


    useEffect(() => {
        axios.get('/transaction/incomesvalue')
            .then(response => {
                appState.setState(prevState => {
                    prevState.totalIncome = response.data
                    return { ...prevState };
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let amountFormatter = Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    })



    return (
        <div className="card_component_totIncome">
            <img className="card_icon" src="https://www.clipartmax.com/png/middle/99-999995_low-cost-icon-money-with-an-arrow.png" alt="income icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Income</h5>
                <p className="card_data">
                    {amountFormatter.format(appState.totalIncome)}
                </p>
            </div>
        </div>
    );
}

export default TotalIncome;