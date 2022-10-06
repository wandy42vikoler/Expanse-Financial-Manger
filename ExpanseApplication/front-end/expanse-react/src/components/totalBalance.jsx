import "../index.css";
import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import { appStateContext } from "../store";



 

function TotalBalanceComponent() {

    axios.defaults.baseURL = 'http://localhost:8080';

    const appState = useContext(appStateContext)

    useEffect(()=> {
        axios.get('/finances/balance')
        .then(response => {
            appState.setState(prevState =>{
                prevState.totalBalance = response.data;
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

        <div className="card_component_totBalance">
        <img className="card_icon" src="https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/icons/hand.svg" alt="balance icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Balance</h5>
                <p className="card_data">
                {amountFormatter.format(appState.totalBalance)}
                </p>
            </div>
        </div>
    );
}

export default TotalBalanceComponent;