import "../index.css";
import axios from 'axios';
import React, {useEffect, useState} from 'react';



 

function TotalBalanceComponent() {

    axios.defaults.baseURL = 'http://localhost:8080';

    const [balance, setBalance] = useState(0);

    useEffect(()=> {
        axios.get('/finances/balance')
        .then(response => {
            console.log('balance', response.data)
            setBalance(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[balance])

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })


    

    return (

        <div className="card_component_totBalance">
        <img className="card_icon" src="https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby/icons/hand.svg" alt="balance icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Balance</h5>
                <p className="card_data">
                {amountFormatter.format(balance)}
                </p>
            </div>
        </div>
    );
}

export default TotalBalanceComponent;