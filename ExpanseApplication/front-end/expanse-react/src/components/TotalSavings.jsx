import "../App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
 

function TotalSavingComponent() {


    const [saving, setSaving] = useState(0);

    useEffect(()=>{
        axios.get('/savings')
        .then(response =>{
            console.log(response.data)
            setSaving(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    })

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })

    return (

        <div className="card_component_Savings">
            <img className="card_icon" src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/014/889/original/piggy-bank_4633700.png" alt="saving icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Saving</h5>
                <p className="card_data">
                {amountFormatter.format(saving)}
                </p>
            </div>
        </div>
    );
}

export default TotalSavingComponent;