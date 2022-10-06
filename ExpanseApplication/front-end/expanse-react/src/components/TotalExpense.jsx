import "../App.css";
import React, {useContext, useEffect} from "react";
import axios from 'axios';
import {appStateContext} from '../store'

 

function TotalExpense() {


    axios.defaults.baseURL = 'http://localhost:8080';
  
    const appState = useContext(appStateContext);

    useEffect(() => {
        axios.get('/transaction/expensesvalue')
            .then(response => { 
                appState.setState(prevState => {
                    prevState.totalExpense = response.data;
                    return {...prevState}
                })
            })
            .catch(error => {
                console.log(error)
            })
    },[])

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })

    return (

        <div className="card_component_totExpenses">
            <div>
                <img className="card_icon" src="https://cdn-icons-png.flaticon.com/512/2315/2315648.png" alt="expense icon" width='40'/>
            </div>
            <div className="card_body">
                <h5 className="card_title">Total Expense</h5>
                <p className="card_data">
                {amountFormatter.format(appState.totalExpense)}
                </p>
            </div>
        </div>
    );
}

export default TotalExpense;