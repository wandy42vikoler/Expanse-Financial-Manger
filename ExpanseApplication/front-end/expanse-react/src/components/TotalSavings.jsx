import "../App.css";
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SavingDialog from './../forms/dialogs/savingdialog'
 

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


    const [savingDialog, setSavingDialog] = useState(false);

    const handleOpen = () => {
        setSavingDialog(true);
    };

    const handleClose = () => {
        setSavingDialog(false);
    };

    const addDeductLink = <Button size='small' onClick={handleOpen} style={{float: 'right', marginRight: '10px'}}>Add/Deduct</Button>


    return (

        <>
        <div className="card_component_Savings">
            <img className="card_icon" src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/014/889/original/piggy-bank_4633700.png" alt="saving icon" width='40' />
            <div className="card_body">
                <h5 className="card_title">Total Saving</h5>
                <p className="card_data">
                    {amountFormatter.format(saving)}
                    {addDeductLink}
                </p>
            </div>
        </div>
        <Dialog open={savingDialog} onClose={handleClose} sx={{width: '1500px'}}>
            <DialogTitle sx={{ marginBottom: '5px' }}>Add/Deduct Saving: </DialogTitle>
            <DialogContent onClose={handleClose} fullWidth maxWidth="xl">
                <SavingDialog/>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default TotalSavingComponent;