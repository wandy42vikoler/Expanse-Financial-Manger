/*import { Button, TableRow } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import '../App.css';
import Incoming from '../assets/incomemon.jpg';
import Outgoing from '../assets/outgonemono.jpg';


export function TransactionCard(){


    const cardStyle = {
        width: '471px',
        height: '253px'
    }

    const titleStyle = {
        fontFamily: 'Manrope',
        fontWeight: '800',
        fontSize: '22px',
        lineHeight: '16px',
        color: '#050624',
        marginTop: '15px',
        marginLeft: '5px',
        maxWidth: '80px',
        display: 'inline-block'
    }

    let amountFormatter = Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR' })





    return(
        <div style={cardStyle}>
            <div>
                <h1 style={titleStyle}>Transactions</h1>
                <Button sx={{display: 'inline-block', float: 'right', marginTop: '5px'}}>Maken Transaction</Button>
            </div>
            <Table sx={{ minWidth: 471 }} aria-label="simple table">
                <TableBody sx={{fontFamily: 'Sora'}}>
                {appState.transactions.map(item => (
                    <TableRow sx={{verticalAlign: 'center'}}>
                        <TableCell align="left" sx={{padding: '0 0 0 0', marginLeft: '5px'}}><p style={{fontWeight: 'bold', marginBottom: '0px', fontFamily: 'Sora'}}>{item.title}</p></TableCell>
                        <TableCell align="left" sx={{fontFamily: 'Sora', marginLeft: '5px'}}>{item.category}</TableCell>
                        <TableCell align="left" sx={{fontFamily: 'Sora'}}><img src={item.transactionType === 'EXPENSE' ? Incoming : Outgoing} alt="incoming" width="28px"></img></TableCell>
                        <TableCell align="left" sx={{fontFamily: 'Sora'}}>{item.date}</TableCell>
                        <TableCell align="left" sx={{fontFamily: 'Sora', fontWeight: 'bold'}}>{amountFormatter.format(item.amount)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>



    )
}
*/