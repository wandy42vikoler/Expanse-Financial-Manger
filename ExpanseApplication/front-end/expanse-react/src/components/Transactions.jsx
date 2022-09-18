import "../App.css";
import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TransactionsInputForm from "./InputTransaction/TransactionInput";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
//import Modal from '@mui/material/Modal';
//import TextField from '@mui/material/TextField';

 

function TransactionsComponent() {

    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [transactions, setTransactions] = useState([]);
    /*const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);*/

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


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 100,
        bgcolor: 'background.paper',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.09)',
        p: 4,
        borderRadius: '20px'
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };




    return (
        <div className="transaction_card" style={{overflow: 'scroll'}}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="primary" aria-label="add" style={{float: 'right'}} onClick={handleClickOpen}>
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
            <Dialog open={open} onClose={handleClose} sx={{width: '1500px'}}>
                <DialogTitle sx={{marginBottom: '5px'}}>Add Transaction: </DialogTitle>
                <DialogContent fullWidth maxWidth="xl">
                    <TransactionsInputForm/>   
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default TransactionsComponent;