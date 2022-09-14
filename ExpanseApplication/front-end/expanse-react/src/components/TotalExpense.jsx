import "../App.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
 

function TotalExpense() {


    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        axios.get('/transaction/expensesvalue')
            .then(response => { 
                console.log(response)
                setTotalExpense(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },)

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
                {amountFormatter.format(totalExpense)}
                </p>
            </div>
        </div>
    );
}

export default TotalExpense;