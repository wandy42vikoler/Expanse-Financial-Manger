import "../App.css";
import React, {useContext, useEffect} from "react";
import axios from 'axios';
import {appStateContext} from '../store';
import { Card } from "./card";


 

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

        <Card title={'Total Expense'} amount={amountFormatter.format('-' + appState.totalExpense)} imgSrc={"https://cdn-icons-png.flaticon.com/512/2315/2315648.png"}/>
    );
}

export default TotalExpense;