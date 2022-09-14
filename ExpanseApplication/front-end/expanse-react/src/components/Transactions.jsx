import "../App.css";
import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
 

function TransactionsComponent() {

    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/transaction')
            .then(response => { 
                console.log(response)
                setTransactions(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })



    return (
        <div className="transaction_card" style={{overflow: 'scroll'}}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="primary" aria-label="add" style={{float: 'right'}}>
                    <AddIcon/>
                </Fab>
            </Box>
            <h5 className="card_title_activity">Transactions</h5>
            <Table className="transactions_table">
                <thead>
                    <tr>
                        <th className="card_title">Title</th>
                        <th className="card_title">Type</th>
                        <th className="card_title">Date</th>
                        <th className="card_title">Amount</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map(item => (
                    <tr>
                        <td key={item.transactionId}>{item.title}</td>
                        <td key={item.transactionId}>{item.category}</td>
                        <td key={item.transactionId}>{item.date}</td>
                        <td key={item.transactionId}>{amountFormatter.format(item.amount)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </div>
    );
}

export default TransactionsComponent;