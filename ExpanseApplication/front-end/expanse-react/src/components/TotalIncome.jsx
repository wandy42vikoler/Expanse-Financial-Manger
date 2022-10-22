import "../App.css";
import React, {useContext, useEffect} from "react";
import axios from 'axios';
import {appStateContext} from '../store';
import { Card } from "./card";

 

function TotalIncome() {

    const appState = useContext(appStateContext);


    axios.defaults.baseURL = 'http://localhost:8080';
  

    useEffect(() => {
        axios.get('/transaction/incomesvalue')
            .then(response => { 
                appState.setState(prevState => {
                    prevState.totalIncome = response.data
                    return {...prevState};
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })



    return (
        <Card title={'Total Income'} amount={amountFormatter.format(appState.totalIncome)} imgSrc={"https://cdn-icons-png.flaticon.com/512/2315/2315648.png"}/>
    );
}

export default TotalIncome;